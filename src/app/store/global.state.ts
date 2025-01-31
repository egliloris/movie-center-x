export const STORE_KEY = 'global';

export interface GlobalState {
  title: string;
}

export const initialState: GlobalState = {
  title: 'Movie Center X',
};
