import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { Store } from '@ngrx/store';
import { filter, switchMap } from 'rxjs';
import { MovieBottomSheetComponent } from './components/movie-bottom-sheet/movie-bottom-sheet.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesHeaderComponent } from './components/movies-header/movies-header.component';
import { Movie } from './models/movies.models';
import * as MoviesActions from './store/movies.actions';
import { selectMovies, selectMovieVoteAverage, selectSelectedMovie } from './store/movies.selectors';

@Component({
  selector: 'app-movies',
  imports: [AsyncPipe, MoviesHeaderComponent, MovieListComponent, MatBottomSheetModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent implements OnInit {
  private readonly store: Store = inject(Store);
  private readonly bottomSheet: MatBottomSheet = inject(MatBottomSheet);

  private readonly movie$ = this.store.select(selectSelectedMovie);

  protected readonly movies$ = this.store.select(selectMovies);
  protected readonly randomMovieVoteAverage$ = this.store.select(selectMovieVoteAverage(1184918));

  constructor() {
    this.handleMovieSelection();
  }

  ngOnInit(): void {
    this.store.dispatch(MoviesActions.loadMovies());
  }

  protected selectMovie(id: number): void {
    this.store.dispatch(MoviesActions.setSelectedId({ selectedId: id }));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected increaseVote(id: number): void {
    // TODO: Trigger a vote increase within the store.
  }

  private handleMovieSelection() {
    this.movie$
      .pipe(
        filter((movie: Movie | undefined): movie is Movie => !!movie),
        switchMap((movie: Movie) => this.bottomSheet.open(MovieBottomSheetComponent, { data: movie }).afterDismissed()),
        takeUntilDestroyed()
      )
      .subscribe(() => this.store.dispatch(MoviesActions.clearSelectedId()));
  }
}
