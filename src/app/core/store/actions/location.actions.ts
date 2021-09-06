import { Action } from '@ngrx/store';

export enum ELocationActions {
  ChooseLocation = 'Choose Location',
  ChooseLocationSuccess = 'Choose Location Success',
}

export class ChooseLocation implements Action {
  public readonly type = ELocationActions.ChooseLocation;

  constructor(public payload: string) {}
}

export class ChooseLocationSuccess implements Action {
  public readonly type = ELocationActions.ChooseLocationSuccess;

  constructor(public payload: string) {}
}

export type LocationAction = ChooseLocation | ChooseLocationSuccess;
