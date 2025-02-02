import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies-header',
  imports: [],
  templateUrl: './movies-header.component.html',
  styleUrl: './movies-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesHeaderComponent {
  @Input({ required: true }) randomMovieVoteAverage: number | null = null;
}
