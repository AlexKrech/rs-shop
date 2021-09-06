import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShowLocationModal } from 'src/app/core/store/actions/location-modal.actions';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss'],
})
export class InfoBlockComponent {

  constructor(private store: Store<IAppState>) {}


  public chooseCity() {
    this.store.dispatch(new ShowLocationModal());
  }
}
