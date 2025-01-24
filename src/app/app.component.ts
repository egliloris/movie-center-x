import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectTitle } from './store/global.selectors';

const materialModules = [MatButtonModule, MatToolbarModule];

type NavItem = { name: string; routerLink: string };

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterOutlet, RouterLink, materialModules],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly store: Store = inject(Store);

  protected readonly title$ = this.store.select(selectTitle);

  protected readonly navItems: NavItem[] = [
    { name: 'Movies', routerLink: '/movies' },
    { name: 'Shows', routerLink: '/shows' },
    { name: 'Actors', routerLink: '/actors' },
  ];
}
