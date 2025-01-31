import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { ActorsComponent } from './features/actors/actors.component';
import { MoviesComponent } from './features/movies/movies.component';
import { ShowsEffects } from './features/shows/store/shows.effects';
import { showsReducer } from './features/shows/store/shows.reducer';
import { FEATURE_KEY_SHOWS } from './features/shows/store/shows.state';

export const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  {
    path: 'shows',
    loadComponent: () => import('./features/shows/shows.component').then(m => m.ShowsComponent),
    providers: [provideState(FEATURE_KEY_SHOWS, showsReducer), provideEffects(ShowsEffects)],
  },
  { path: 'actors', component: ActorsComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];
