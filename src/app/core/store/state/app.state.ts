import { RouterReducerState } from '@ngrx/router-store';
import {
  IAccountModalState,
  initialAccountModalState,
} from './account-modal.state';
import { IAccountState, initialAccountState } from './account.state';
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
  accountModal: IAccountModalState;
  account: IAccountState;
}

export const initialAppState: IAppState = {
  location: initialLocationState,
  locationModal: initialLocationModalState,
  catalog: initialCatalogState,
  accountModal: initialAccountModalState,
  account: initialAccountState,
};

export function getinitialState(): IAppState {
  return initialAppState;
}
