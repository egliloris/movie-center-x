import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from './shows.models';

const SHOWS_URI = '/data/shows.json';

@Injectable({ providedIn: 'root' })
export class ShowsService {
  private readonly http: HttpClient = inject(HttpClient);

  get$(): Observable<Show[]> {
    return this.http.get<Show[]>(SHOWS_URI);
  }
}
