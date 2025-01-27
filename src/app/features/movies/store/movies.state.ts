import { Movie } from '../movies.models';

export const MOVIES_STATE = 'movies-state';

export interface MoviesState {
  selectedId: number | undefined;
  movies: Movie[];
}

export const initialState: MoviesState = {
  selectedId: undefined,
  movies: [],
};
