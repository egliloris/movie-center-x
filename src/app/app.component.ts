import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

const materialModules = [MatButtonModule, MatToolbarModule];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, materialModules],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
