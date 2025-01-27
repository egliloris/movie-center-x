import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { Store } from '@ngrx/store';
import { filter, Subject, switchMap, takeUntil } from 'rxjs';
import { MovieBottomSheetComponent } from './components/movie-bottom-sheet/movie-bottom-sheet.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { Movie } from './movies.models';
import * as MoviesActions from './store/movies.actions';
import {
  selectMovies,
  selectMovieVoteAverage,
  selectSelectedMovie,
} from './store/movies.selectors';

@Component({
    selector: 'app-movies',
    imports: [AsyncPipe, MovieListComponent, MatBottomSheetModule],
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent implements OnInit, OnDestroy {
    private readonly destroy$ = new Subject<void>();

    private readonly store: Store = inject(Store);
    private readonly bottomSheet: MatBottomSheet = inject(MatBottomSheet);

    protected readonly movies$ = this.store.select(selectMovies);
    protected readonly movie$ = this.store.select(selectSelectedMovie);

    protected readonly randomMovieVoteAverage$ = this.store.select(
        selectMovieVoteAverage(1184918)
    );

    ngOnInit(): void {
        this.store.dispatch(MoviesActions.loadMovies());

        this.handleMovieSelection();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
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
                takeUntil(this.destroy$),
                filter((movie: Movie | undefined): movie is Movie => !!movie),
                switchMap((movie: Movie) => {
                    return this.bottomSheet
                        .open(MovieBottomSheetComponent, { data: movie })
                        .afterDismissed();
                })
            )
            .subscribe(() => {
                this.store.dispatch(MoviesActions.clearSelectedId());
            });
    }
}
