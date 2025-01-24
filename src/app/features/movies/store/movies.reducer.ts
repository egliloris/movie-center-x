import { createReducer, on } from '@ngrx/store';
import { Movie } from '../movies.models';
import * as Actions from './movies.actions';

export const MOVIES_STATE = 'movies-state';

export interface MoviesState {
  selectedId: number | undefined;
  movies: Movie[];
}

export const initialState: MoviesState = {
  selectedId: undefined,
  movies: [],
};

export const moviesReducer = createReducer(
  initialState,
  on(Actions.setSelectedId, (state, { selectedId }) => ({
    ...state,
    selectedId,
  })),
  on(Actions.clearSelectedId, (state) => ({ ...state, selectedId: undefined })),
  on(Actions.loadMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies: movies,
  })),
  on(Actions.loadMoviesFailure, (state) => ({ ...state, movies: [] }))
  // TODO: Add the vote increment reducer.
  // You may use the updateMovieVoteCount function from movies.helpers.ts
);
