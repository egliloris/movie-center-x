import { createReducer, on } from '@ngrx/store';
import * as GlobalActions from './global.actions';

export const GLOBAL_STATE = 'global';

export interface GlobalState {
  title: string;
}

export const initialState: GlobalState = {
  title: 'Movie Center X',
};

export const globalReducer = createReducer(
  initialState,
  on(GlobalActions.setTitle, (state, { title }) => ({ ...state, title }))
);
