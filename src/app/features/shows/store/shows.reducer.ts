import { createReducer, on } from '@ngrx/store';
import * as ShowsActions from './shows.actions';
import { initialState } from './shows.state';


// TODO: Implement reducers.
export const showsReducer = createReducer(
    initialState,
    on(ShowsActions.loadShowsSuccess, (state, { entities }) => ({ ...state, entities })),
    on(ShowsActions.loadShowsFailure, state => ({ ...state, entities: [] })),
);
