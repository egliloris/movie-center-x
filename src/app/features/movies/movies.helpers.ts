import { Movie } from './movies.models';

export const updateMovieVoteCount = (movies: Movie[], id: number): Movie[] => {
  return movies.map((movie: Movie): Movie => {
    if (movie.id === id) {
      return { ...movie, voteCount: movie.voteCount + 1 };
    }
    return movie;
  });
};
