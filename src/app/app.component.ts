import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { HideLocationModal } from './core/store/actions/location-modal.actions';
import { selectLocationModalState } from './core/store/selectors/location-modal.selector';
import { IAppState } from './core/store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'rs-shop';

  public isShowed?: boolean;

  constructor(private store: Store<IAppState>) {}

  public ngOnInit(): void {
    this.store.pipe(select(selectLocationModalState)).subscribe((isShowed) => {
      this.isShowed = isShowed;
    });
  }

  public closeModal(event: Event): void {
    const target = <HTMLElement>event.target;
    if (
      target.closest('.modal') ||
      target.closest('.modal__location-list-wrap')
    ) {
      return;
    }
    this.store.dispatch(new HideLocationModal());
  }
}
