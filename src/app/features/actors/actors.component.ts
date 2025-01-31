import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActorsService } from './services/actors.service';

@Component({
  selector: 'app-actors',
  providers: [ActorsService],
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorsComponent {}
