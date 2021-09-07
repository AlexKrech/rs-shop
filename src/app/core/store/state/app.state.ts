import { RouterReducerState } from '@ngrx/router-store';
import {
  ILocationModalState,
  initialLocationModalState,
} from './location-modal.state';
import { ILocationState, initialLocationState } from './location.state';
// import {
//   IMoreContactsState,
//   initialMoreContactsState,
// } from './more-contacts-visibility.state';

export interface IAppState {
  router?: RouterReducerState;
  location: ILocationState;
  locationModal: ILocationModalState;
}

export const initialAppState: IAppState = {
  location: initialLocationState,
  locationModal: initialLocationModalState,
};

export function getinitialState(): IAppState {
  return initialAppState;
}
