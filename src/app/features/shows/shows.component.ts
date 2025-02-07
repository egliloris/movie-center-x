import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShowsHeaderComponent } from "./components/show-header/show-header.component";
import { ShowListComponent } from "./components/show-list/show-list.component";
import * as ShowsActions from './store/shows.actions';
import { selectShows } from './store/shows.selectors';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ShowListComponent, AsyncPipe, ShowsHeaderComponent],
})
export class ShowsComponent {
  private readonly store: Store = inject(Store);
  
  // TODO: Load all shows.
  // TODO: Make sure you have one smart component and N dumb components.

  protected readonly shows$ = this.store.select(selectShows);

  ngOnInit(): void {
    this.store.dispatch(ShowsActions.loadShows());
  }

  test(id: number): void{
    console.log(id)
  }
}
