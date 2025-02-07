import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Show } from '../models/shows.models';
import { FEATURE_KEY_SHOWS, ShowsState } from './shows.state';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const selectShowsState = createFeatureSelector<ShowsState>(FEATURE_KEY_SHOWS);

// TODO: Implement selectors

//const selectShows = createFeatureSelector
export const selectShows = createSelector(selectShowsState, (state: ShowsState): Show[] => state.entities);
