import { createReducer, on } from '@ngrx/store';
import { updateMovieVoteCount } from '../helpers/movies.helpers';
import * as Actions from './movies.actions';
import { initialState } from './movies.state';

export const moviesReducer = createReducer(
  initialState,
  on(Actions.setSelectedId, (state, paylosf) => ({ ...state, selectedId: paylosf.selectedId })),
  on(Actions.clearSelectedId, state => ({ ...state, selectedId: undefined })),
  on(Actions.loadMoviesSuccess, (state, { entities }) => ({ ...state, entities })),
  on(Actions.loadMoviesFailure, state => ({ ...state, entities: [] })),
  on(Actions.likeSelectedId, (state, { selectedId }) => ({ ...state, entities: updateMovieVoteCount(state.entities, selectedId) }))
);
