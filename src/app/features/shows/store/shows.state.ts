import { Show } from '../shows.models';

export const SHOWS_STATE = 'shows';

export interface ShowsState {
  selectedId: number | undefined;
  entities: Show[];
}

export const initialState: ShowsState = {
  selectedId: undefined,
  entities: [],
};
