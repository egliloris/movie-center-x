import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Show } from '../../models/shows.models';

@Component({
  selector: 'app-show-item',
  imports: [DatePipe, MatButtonModule, MatCardModule],
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowItemComponent {
  @Input({ required: true }) show!: Show;

  @Output() readonly detailsClick = new EventEmitter<number>();

  @Output() readonly voteClick = new EventEmitter<number>();
}
