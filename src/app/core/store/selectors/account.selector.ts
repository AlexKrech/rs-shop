import { createSelector } from '@ngrx/store';
import { IAccountState } from '../state/account.state';
import { IAppState } from '../state/app.state';

const selectAccount = (state: IAppState) => state.account;

export const selectAccountState = createSelector(
  selectAccount,
  (state: IAccountState) => state.isLogined
);

export const selectAccountData = createSelector(
  selectAccount,
  (state: IAccountState) => state.loginData
);
