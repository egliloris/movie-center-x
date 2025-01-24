import { createAction, props } from '@ngrx/store';
import { Movie } from '../movies.models';

export const setSelectedId = createAction(
  '[Movies] set selected id',
  props<{ selectedId: number }>()
);

export const clearSelectedId = createAction('[Movies] clear selected id');

export const loadMovies = createAction('[Movies] load');
export const loadMoviesSuccess = createAction(
  '[Movies] load success',
  props<{ movies: Movie[] }>()
);
export const loadMoviesFailure = createAction('[Movies] load failure');
