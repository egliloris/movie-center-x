import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowsComponent {
  // TODO: Load all shows.
  // TODO: Make sure you have one smart component and N dumb components.
}
