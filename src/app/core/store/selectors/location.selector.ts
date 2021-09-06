import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ILocationState } from '../state/location.state';

const selectLocation = (state: IAppState) => state.location;

export const selectSelectedLocation = createSelector(
  selectLocation,
  (state: ILocationState) => state.selectedLocation
);
