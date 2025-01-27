import { Movie } from '../movies.models';

export const MOVIES_STATE = 'movies';

export interface MoviesState {
  selectedId: number | undefined;
  entities: Movie[];
}

export const initialState: MoviesState = {
  selectedId: undefined,
  entities: [],
};
