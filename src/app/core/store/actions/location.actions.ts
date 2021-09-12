import { Action } from '@ngrx/store';
import { ILocationResponseData } from 'src/app/shared/models/location-by-search-string';

export enum ELocationActions {
  ChooseLocation = 'Choose Location',
  DeleteLocation = 'Delete Location',
  GetInitialLocation = 'Get Initial Location',
  GetInitialLocationSuccess = 'Get Initial Location Success',
  FethLocations = 'Feth Locations',
  FethLocationsSuccess = 'Feth Locations Success',
  ClearLocations = 'Clear Locations',
}

export class ChooseLocation implements Action {
  public readonly type = ELocationActions.ChooseLocation;

  constructor(public payload: string) {}
}

export class DeleteLocation implements Action {
  public readonly type = ELocationActions.DeleteLocation;
}

export class FethLocations implements Action {
  public readonly type = ELocationActions.FethLocations;

  constructor(public payload: string) {}
}
// TODO: action wint this name shouldn't contain null as a payload
export class FethLocationsSuccess implements Action {
  public readonly type = ELocationActions.FethLocationsSuccess;

  constructor(public payload: ILocationResponseData[] | null) {}
}

export class GetInitialLocation implements Action {
  public readonly type = ELocationActions.GetInitialLocation;
}

export class GetInitialLocationSuccess implements Action {
  public readonly type = ELocationActions.GetInitialLocationSuccess;

  constructor(public payload: string) {}
}

export class ClearLocations implements Action {
  public readonly type = ELocationActions.ClearLocations;
}

export type LocationAction =
  | ChooseLocation
  | DeleteLocation
  | GetInitialLocation
  | GetInitialLocationSuccess
  | FethLocations
  | FethLocationsSuccess
  | ClearLocations;
