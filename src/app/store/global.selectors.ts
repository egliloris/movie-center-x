import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState, STORE_KEY } from './global.state';

export const globalSelector = createFeatureSelector<GlobalState>(STORE_KEY);

export const selectTitle = createSelector(globalSelector, state => state.title);

const selectUser = createSelector(globalSelector, state => state.user);

export const selectUserName = createSelector(selectUser, user => user.name);
