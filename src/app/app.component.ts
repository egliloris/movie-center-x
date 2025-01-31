import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectTitle, selectUserName } from './store/global.selectors';

const materialModules = [MatTooltipModule, MatIconModule, MatToolbarModule, MatButtonModule];

interface NavItem {
  name: string;
  routerLink: string;
}

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterOutlet, RouterLink, materialModules],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly store: Store = inject(Store);

  protected readonly title$ = this.store.select(selectTitle);

  protected readonly userName$ = this.store.select(selectUserName);

  protected readonly navItems: NavItem[] = [
    { name: 'Movies', routerLink: '/movies' },
    { name: 'Shows', routerLink: '/shows' },
    { name: 'Actors', routerLink: '/actors' },
  ];
}
