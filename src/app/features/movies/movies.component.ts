import { AsyncPipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import * as MoviesActions from './store/movies.actions';
import { selectMovies } from './store/movies.selectors';

@Component({
  selector: 'app-movies',
  imports: [AsyncPipe, NgFor],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent implements OnInit {
  private readonly store: Store = inject(Store);

  protected readonly movies$ = this.store.select(selectMovies);

  ngOnInit(): void {
    this.store.dispatch(MoviesActions.loadMovies());
  }
}
