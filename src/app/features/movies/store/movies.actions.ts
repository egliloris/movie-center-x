import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movies.models';

export const setSelectedId = createAction('[Movies] set selected id', props<{ selectedId: number }>());

export const clearSelectedId = createAction('[Movies] clear selected id');

export const likeSelectedId = createAction('[Movies] like selected id', props<{ selectedId: number }>())
export const loadMovies = createAction('[Movies] load');
export const loadMoviesSuccess = createAction('[Movies] load success', props<{ entities: Movie[] }>());
export const loadMoviesFailure = createAction('[Movies] load failure');
