import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-actors',
  imports: [],
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorsComponent {}
