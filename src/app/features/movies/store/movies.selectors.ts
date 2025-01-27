import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Movie } from '../movies.models';
import { MOVIES_STATE, MoviesState } from './movies.state';

export const selectMoviesState =
  createFeatureSelector<MoviesState>(MOVIES_STATE);

export const selectMovies = createSelector(
  selectMoviesState,
  (state: MoviesState): Movie[] => state.movies
);

export const selectSelectedMovie = createSelector(
  selectMoviesState,
  ({ selectedId, movies }: MoviesState): Movie | undefined =>
    selectedId ? movies.find(movie => movie.id === selectedId) : undefined
);

export const selectMovieVoteAverage = (id: number) =>
  createSelector(selectMovies, (movies: Movie[]): number => {
    const movie = movies.find((movie: Movie) => movie.id === id);
    return movie?.voteAverage || 0;
  });
