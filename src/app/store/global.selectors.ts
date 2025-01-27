import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GLOBAL_STATE, GlobalState } from './global.reducer';

export const globalSelector = createFeatureSelector<GlobalState>(GLOBAL_STATE);

export const selectTitle = createSelector(globalSelector, state => state.title);
