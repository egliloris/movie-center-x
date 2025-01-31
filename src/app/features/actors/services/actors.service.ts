import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../models/actor.models';

const ACTORS_URI = '/data/actors.json';

@Injectable({ providedIn: 'root' })
export class ActorsService {
  private readonly http: HttpClient = inject(HttpClient);

  get$(): Observable<Actor[]> {
    return this.http.get<Actor[]>(ACTORS_URI);
  }
}
