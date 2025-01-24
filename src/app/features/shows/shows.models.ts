export interface Show {
  id: number;
  backdropPath: string;
  name: string;
  originalName: string;
  overview: string;
  posterPath: string;
  mediaType: string;
  adult: boolean;
  originalLanguage: boolean;
  genreIds: number[];
  popularity: number;
  firstAirDate: Date;
  voteAverage: number;
  voteCount: number;
  originCountry: string[];
}
