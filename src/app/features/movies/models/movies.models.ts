export interface Movie {
  id: number;
  backdropPath: string;
  title: string;
  originalTitle: string;
  overview: string;
  posterPath: string;
  mediaType: string;
  adult: boolean;
  originalLanguage: boolean;
  genreIds: number[];
  popularity: number;
  releaseDate: Date;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
