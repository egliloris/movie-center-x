import { createFeatureSelector } from '@ngrx/store';
import { FEATURE_KEY_SHOWS, ShowsState } from './shows.state';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const selectShowsState = createFeatureSelector<ShowsState>(FEATURE_KEY_SHOWS);

// TODO: Implement selectors
