import { Show } from '../models/shows.models';

export const FEATURE_KEY_SHOWS = 'shows';

export interface ShowsState {
  selectedId: number | undefined;
  entities: Show[];
}

export const initialState: ShowsState = {
  selectedId: undefined,
  entities: [],
};
