import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Movie } from '../../models/movies.models';

@Component({
  selector: 'app-movie-bottom-sheet',
  imports: [JsonPipe],
  templateUrl: './movie-bottom-sheet.component.html',
  styleUrl: './movie-bottom-sheet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieBottomSheetComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) protected readonly data: Movie) {}
}
