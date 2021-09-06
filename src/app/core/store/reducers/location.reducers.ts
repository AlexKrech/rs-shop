import { ELocationActions, LocationAction } from '../actions/location.actions';
import { initialLocationState, ILocationState } from '../state/location.state';

export const locationReducers = (
  state = initialLocationState,
  action: LocationAction
): ILocationState => {
  switch (action.type) {
    case ELocationActions.ChooseLocation: {
      return {
        ...state,
        selectedLocation: action.payload,
      };
    }
    // case EVideoActions.GetVideoCardSuccess: {
    //   return {
    //     ...state,
    //     selectedVideoCard: action.payload,
    //   };
    // }
    default:
      return state;
  }
};
