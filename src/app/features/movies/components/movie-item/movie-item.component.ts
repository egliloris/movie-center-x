import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Movie } from '../../movies.models';

@Component({
  selector: 'app-movie-item',
  imports: [DatePipe, MatCardModule, MatButtonModule, MatTooltipModule],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieItemComponent {
  @Input({ required: true }) movie!: Movie;

  @Output() readonly detailsClick = new EventEmitter<number>();

  @Output() readonly voteClick = new EventEmitter<number>();
}
