export const STORE_KEY = 'global';

export interface User {
  name: string;
  favoritMovieId: number;
}

export interface GlobalState {
  title: string;
  user: User;
}

export const initialState: GlobalState = {
  title: 'Movie Center X',
  user: { name: 'Din Djarin', favoritMovieId: 693134 },
};
