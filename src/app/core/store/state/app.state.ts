import { RouterReducerState } from '@ngrx/router-store';
import { ICatalogState, initialCatalogState } from './catalog.state';
import {
  ILocationModalState,
  initialLocationModalState,
} from './location-modal.state';
import { ILocationState, initialLocationState } from './location.state';

export interface IAppState {
  router?: RouterReducerState;
  location: ILocationState;
  locationModal: ILocationModalState;
  catalog: ICatalogState;
}

export const initialAppState: IAppState = {
  location: initialLocationState,
  locationModal: initialLocationModalState,
  catalog: initialCatalogState,
};

export function getinitialState(): IAppState {
  return initialAppState;
}
