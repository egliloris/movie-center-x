import { inject, Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ShowsService } from '../services/shows.service';

@Injectable()
export class ShowsEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly service: ShowsService = inject(ShowsService);

  // TODO: Implement effects.
}
