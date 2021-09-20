import {
  AccountModalAction,
  EAccountModalActions,
} from '../actions/account-modal.actions';
import {
  IAccountModalState,
  initialAccountModalState,
} from '../state/account-modal.state';

export const accountModalReducers = (
  state = initialAccountModalState,
  action: AccountModalAction
): IAccountModalState => {
  switch (action.type) {
    case EAccountModalActions.ShowAccountModal: {
      return {
        ...state,
        modalShowed: true,
      };
    }
    case EAccountModalActions.HideAccountModal: {
      return {
        ...state,
        modalShowed: false,
      };
    }
    default:
      return state;
  }
};
