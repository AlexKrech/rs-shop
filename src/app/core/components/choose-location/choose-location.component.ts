import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { HideLocationModal } from '../../store/actions/location-modal.actions';
import {
  ChooseLocation,
  DeleteLocation,
  FethLocations,
} from '../../store/actions/location.actions';
import { selectLocationList } from '../../store/selectors/location.selector';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-choose-location',
  templateUrl: './choose-location.component.html',
  styleUrls: ['./choose-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseLocationComponent {
  public locationInputValue: string = '';

  constructor(private store: Store<IAppState>) {}

  public cityList$ = this.store.pipe(select(selectLocationList));

  public closeModal(): void {
    this.store.dispatch(new HideLocationModal());
  }

  public searchLocations(searchString: string) {
    this.store.dispatch(new FethLocations(searchString));
  }

  public chooseLocation(searchString: string) {
    this.locationInputValue = searchString;
    this.store.dispatch(new DeleteLocation());
  }

  public submitLocation(searchString: string) {
    this.store.dispatch(new ChooseLocation(searchString));
    this.store.dispatch(new HideLocationModal());
  }
}
