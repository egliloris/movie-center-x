import { createAction, props } from '@ngrx/store';

export const setTitle = createAction(
  '[Global] Set Title',
  props<{ title: string }>()
);
