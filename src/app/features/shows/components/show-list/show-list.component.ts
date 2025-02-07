import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../models/shows.models';
import { ShowItemComponent } from "../show-item/show-item.component";

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ShowItemComponent],
})
export class ShowListComponent {
  @Input() shows: Show[] | null = [];

  @Output() readonly detailsClick = new EventEmitter<number>();

  @Output() readonly voteClick = new EventEmitter<number>();
}
