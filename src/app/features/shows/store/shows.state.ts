import { Show } from '../shows.models';

export const SHOWS_STATE = 'shows-state';

export interface ShowsState {
  selectedId: number | undefined;
  shows: Show[];
}

export const initialState: ShowsState = {
  selectedId: undefined,
  shows: [],
};
