import { AccountAction, EAccountActions } from '../actions/account.actions';
import { IAccountState, initialAccountState } from '../state/account.state';

export const accountReducers = (
  state = initialAccountState,
  action: AccountAction
): IAccountState => {
  switch (action.type) {
    case EAccountActions.LoginedSuccess: {
      return {
        ...state,
        isLogined: true,
        loginData: action.payload,
      };
    }
    case EAccountActions.LogOutedSuccess: {
      return {
        ...state,
        isLogined: false,
        loginData: null,
      };
    }
    default:
      return state;
  }
};
