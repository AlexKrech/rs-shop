import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { HideLocationModal } from '../../store/actions/location-modal.actions';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-choose-location',
  templateUrl: './choose-location.component.html',
  styleUrls: ['./choose-location.component.scss'],
})
export class ChooseLocationComponent {
  constructor(private store: Store<IAppState>) {}

  public closeModal(): void {
    this.store.dispatch(new HideLocationModal());
  }
}
