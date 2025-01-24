import { Routes } from '@angular/router';
import { ActorsComponent } from './features/actors/actors.component';
import { MoviesComponent } from './features/movies/movies.component';
import { ShowsComponent } from './features/shows/shows.component';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'actors', component: ActorsComponent },
];
