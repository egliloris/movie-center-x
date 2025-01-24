import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { MoviesEffects } from './features/movies/store/movies.effects';
import {
  MOVIES_STATE,
  moviesReducer,
} from './features/movies/store/movies.reducer';
import { ShowsEffects } from './features/shows/store/shows.effects';
import {
  SHOWS_STATE,
  showsReducer,
} from './features/shows/store/shows.reducer';
import { GLOBAL_STATE, globalReducer } from './store/global.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore({
      [GLOBAL_STATE]: globalReducer,
      [MOVIES_STATE]: moviesReducer,
      [SHOWS_STATE]: showsReducer,
    }),
    provideEffects(MoviesEffects, ShowsEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(),
  ],
};
