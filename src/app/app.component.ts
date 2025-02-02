import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { HeaderComponent } from './components/header/header.component';
import { NavItem } from './models/nav-item.model';
import { selectTitle, selectUserName } from './store/global.selectors';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterOutlet, HeaderComponent],
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
