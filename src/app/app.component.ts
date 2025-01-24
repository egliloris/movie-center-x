import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

const materialModules = [MatButtonModule, MatToolbarModule];

type NavItem = { name: string; routerLink: string };

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, materialModules],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected readonly navItems: NavItem[] = [
    { name: 'Movies', routerLink: '/movies' },
    { name: 'Shows', routerLink: '/shows' },
    { name: 'Actors', routerLink: '/actors' },
  ];
}
