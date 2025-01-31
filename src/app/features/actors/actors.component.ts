import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorsComponent {}
