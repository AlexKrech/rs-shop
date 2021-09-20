import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  CheckLogin,
  EAccountActions,
  Login,
  LoginedSuccess,
  LogOut,
  LogOutedSuccess,
} from '../actions/account.actions';

@Injectable()
export class AccountEffects {
  login = createEffect(() =>
    this.actions$.pipe(
      ofType<Login>(EAccountActions.Login),
      map((action) => {
        localStorage.setItem('loginData', action.payload);

        return action.payload;
      }),
      switchMap((data) => of(new LoginedSuccess(data)))
    )
  );

  checkLogin = createEffect(() =>
    this.actions$.pipe(
      ofType<CheckLogin>(EAccountActions.CheckLogin),
      map(() => {
        const loginData = localStorage.getItem('loginData');

        return loginData;
      }),
      switchMap((loginData) => {
        if (loginData) return of(new LoginedSuccess(loginData));
        return of(new LogOutedSuccess());
      })
    )
  );

  logout = createEffect(() =>
    this.actions$.pipe(
      ofType<LogOut>(EAccountActions.LogOut),
      map(() => {
        localStorage.removeItem('loginData');
      }),
      switchMap(() => of(new LogOutedSuccess()))
    )
  );

  constructor(private actions$: Actions) {}
}
