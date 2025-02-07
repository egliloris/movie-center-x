import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Movie } from '../models/movies.models';
import { FEATURE_KEY_MOVIES, MoviesState } from './movies.state';

const selectMoviesState = createFeatureSelector<MoviesState>(FEATURE_KEY_MOVIES);

export const selectMovies = createSelector(selectMoviesState, (state: MoviesState): Movie[] => state.entities);

export const selectSelectedMovie = createSelector(
  selectMoviesState,
  ({ selectedId, entities }: MoviesState): Movie | undefined =>
    selectedId ? entities.find(entity => entity.id === selectedId) : undefined
);

export const selectMovieVoteAverage = (id: number) =>
  createSelector(selectMovies, (entities: Movie[]): number => {
    const movie = entities.find((movie: Movie) => movie.id === id);
    return movie?.voteAverage || 0;
  });

  export const selectMostLikedMovie = () =>
    createSelector(selectMovies, (entities: Movie[]): Movie | undefined => {
      const mostLikedMovie = entities.reduce( (max, current) => {return (current.voteCount > max.voteCount) ? current : max;}, entities[0]);
      return mostLikedMovie;
    });
