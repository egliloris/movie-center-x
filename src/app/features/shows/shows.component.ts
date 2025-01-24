import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shows',
  imports: [],
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowsComponent {}
