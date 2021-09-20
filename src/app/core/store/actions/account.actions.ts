import { Action } from '@ngrx/store';

export enum EAccountActions {
  Login = 'Login',
  LogOut = 'LogOut',
  CheckLogin = 'Check Login',
  LoginedSuccess = 'Logined Success',
  LogOutedSuccess = 'LogOuted Success',
}

export class Login implements Action {
  public readonly type = EAccountActions.Login;

  constructor(public payload: string) {}
}

export class LoginedSuccess implements Action {
  public readonly type = EAccountActions.LoginedSuccess;

  constructor(public payload: string) {}
}

export class CheckLogin implements Action {
  public readonly type = EAccountActions.CheckLogin;
}

export class LogOut implements Action {
  public readonly type = EAccountActions.LogOut;
}

export class LogOutedSuccess implements Action {
  public readonly type = EAccountActions.LogOutedSuccess;
}

export type AccountAction =
  | Login
  | LoginedSuccess
  | CheckLogin
  | LogOut
  | LogOutedSuccess;
