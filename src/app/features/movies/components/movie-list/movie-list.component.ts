import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movies.models';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
  selector: 'app-movie-list',
  imports: [MovieItemComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent {
  @Input() movies: Movie[] | null = [];

  @Output() readonly detailsClick = new EventEmitter<number>();

  @Output() readonly voteClick = new EventEmitter<number>();
}
