import { Action } from '@ngrx/store';

export enum EAccountModalActions {
  ShowAccountModal = 'Show Account Modal',
  HideAccountModal = 'Hide Account Modal',
}

export class ShowAccountModal implements Action {
  public readonly type = EAccountModalActions.ShowAccountModal;
}

export class HideAccountModal implements Action {
  public readonly type = EAccountModalActions.HideAccountModal;
}

export type AccountModalAction = ShowAccountModal | HideAccountModal;
