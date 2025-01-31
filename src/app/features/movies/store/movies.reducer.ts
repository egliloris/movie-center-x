import { createReducer, on } from '@ngrx/store';
import * as Actions from './movies.actions';
import { initialState } from './movies.state';

export const moviesReducer = createReducer(
  initialState,
  on(Actions.setSelectedId, (state, { selectedId }) => ({ ...state, selectedId })),
  on(Actions.clearSelectedId, state => ({ ...state, selectedId: undefined })),
  on(Actions.loadMoviesSuccess, (state, { entities }) => ({ ...state, entities })),
  on(Actions.loadMoviesFailure, state => ({ ...state, entities: [] }))
  // TODO: Add the vote increment reducer.
  // You may use the updateMovieVoteCount function from ./helpers/movies.helpers.ts
);
