import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ILocationModalState } from '../state/location-modal.state';

const selectLocationModal = (state: IAppState) => state.locationModal;

export const selectLocationModalState = createSelector(
  selectLocationModal,
  (state: ILocationModalState) => state.modalShowed
);
