import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Movie } from '../movies.models';
import { MoviesService } from '../movies.service';
import * as MoviesActions from './movies.actions';

@Injectable()
export class MoviesEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly service: MoviesService = inject(MoviesService);

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      exhaustMap(() =>
        this.service.get$().pipe(
          map((entities: Movie[]) => {
            return MoviesActions.loadMoviesSuccess({ entities });
          }),
          catchError(() => of(MoviesActions.loadMoviesFailure()))
        )
      )
    )
  );
}
