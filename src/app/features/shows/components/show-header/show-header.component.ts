import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-show-header',
  imports: [],
  templateUrl: './show-header.component.html',
  styleUrl: './show-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowsHeaderComponent {
}
