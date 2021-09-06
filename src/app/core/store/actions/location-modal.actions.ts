import { Action } from '@ngrx/store';

export enum ELocationModalActions {
  ShowLocationModal = 'Show Location Modal',
  HideLocationModal = 'Hide Location Modal',
}

export class ShowLocationModal implements Action {
  public readonly type = ELocationModalActions.ShowLocationModal;
}

export class HideLocationModal implements Action {
  public readonly type = ELocationModalActions.HideLocationModal;
}

export type LocationModalAction = ShowLocationModal | HideLocationModal;
