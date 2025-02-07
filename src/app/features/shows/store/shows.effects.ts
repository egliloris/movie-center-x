import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Show } from '../models/shows.models';
import { ShowsService } from '../services/shows.service';
import * as ShowsActions from './shows.actions';

@Injectable()
export class ShowsEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly service: ShowsService = inject(ShowsService);

  // TODO: Implement effects.
  loadShows$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ShowsActions.loadShows),
        exhaustMap(() =>
          this.service.get$().pipe(
            map((entities: Show[]) => ShowsActions.loadShowsSuccess({ entities })),
            catchError(() => of(ShowsActions.loadShowsFailure()))
          )
        )
      )
    );
}
