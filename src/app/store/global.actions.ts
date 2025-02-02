import { createAction, props } from '@ngrx/store';

export const setTitle = createAction('[Global] set title', props<{ title: string }>());
