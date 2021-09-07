import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ShowLocationModal } from 'src/app/core/store/actions/location-modal.actions';
import { GetInitialLocation } from 'src/app/core/store/actions/location.actions';
import { selectSelectedLocation } from 'src/app/core/store/selectors/location.selector';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss'],
})
export class InfoBlockComponent implements OnInit {
  public location = this.store.pipe(select(selectSelectedLocation));

  constructor(private store: Store<IAppState>) {}

  public ngOnInit(): void {
    this.store.dispatch(new GetInitialLocation());
  }

  public chooseCity() {
    this.store.dispatch(new ShowLocationModal());
  }
}
