import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { MoviesEffects } from './features/movies/store/movies.effects';
import { moviesReducer } from './features/movies/store/movies.reducer';
import { FEATURE_KEY_MOVIES } from './features/movies/store/movies.state';
import { globalReducer } from './store/global.reducer';
import { STORE_KEY } from './store/global.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore({ [STORE_KEY]: globalReducer, [FEATURE_KEY_MOVIES]: moviesReducer }),
    provideEffects(MoviesEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(),
  ],
};
