import { Movie } from '../models/movies.models';

export const FEATURE_KEY_MOVIES = 'movies';

export interface MoviesState {
  selectedId: number | undefined;
  entities: Movie[];
}

export const initialState: MoviesState = {
  selectedId: undefined,
  entities: [],
};
