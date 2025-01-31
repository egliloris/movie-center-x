import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movies.models';

const MOVIES_URI = '/data/movies.json';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private readonly http: HttpClient = inject(HttpClient);

  get$(): Observable<Movie[]> {
    return this.http.get<Movie[]>(MOVIES_URI);
  }
}
