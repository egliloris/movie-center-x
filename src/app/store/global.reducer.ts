import { createReducer, on } from '@ngrx/store';
import * as GlobalActions from './global.actions';
import { initialState } from './global.state';

export const globalReducer = createReducer(
  initialState,
  on(GlobalActions.setTitle, (state, { title }) => ({ ...state, title }))
);
