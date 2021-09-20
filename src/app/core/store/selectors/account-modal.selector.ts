import { createSelector } from '@ngrx/store';
import { IAccountModalState } from '../state/account-modal.state';
import { IAppState } from '../state/app.state';

const selectAccountModal = (state: IAppState) => state.accountModal;

export const selectAccountModalState = createSelector(
  selectAccountModal,
  (state: IAccountModalState) => state.modalShowed
);
