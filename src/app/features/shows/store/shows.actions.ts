import { createAction, props } from "@ngrx/store";
import { Show } from "../models/shows.models";

// TODO: Implement actions.
export const loadShows = createAction('[Shows] load');
export const loadShowsSuccess = createAction('[Shows] load success', props<{ entities: Show[] }>());
export const loadShowsFailure = createAction('[Shows] load failure');
