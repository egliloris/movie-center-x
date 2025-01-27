import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Movie } from '../movies.models';
import { MOVIES_STATE, MoviesState } from './movies.state';

export const selectMoviesState =
  createFeatureSelector<MoviesState>(MOVIES_STATE);

export const selectMovies = createSelector(
  selectMoviesState,
  (state: MoviesState): Movie[] => state.entities
);

export const selectSelectedMovie = createSelector(
  selectMoviesState,
  ({ selectedId, entities }: MoviesState): Movie | undefined =>
    selectedId ? entities.find(entity => entity.id === selectedId) : undefined
);

export const selectMovieVoteAverage = (id: number) =>
  createSelector(selectMovies, (entities: Movie[]): number => {
    const entity = entities.find((movie: Movie) => movie.id === id);
    return entity?.voteAverage || 0;
  });
