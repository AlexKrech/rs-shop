import {
  ELocationModalActions,
  LocationModalAction,
} from '../actions/location-modal.actions';
import {
  ILocationModalState,
  initialLocationModalState,
} from '../state/location-modal.state';

export const locationModalReducers = (
  state = initialLocationModalState,
  action: LocationModalAction
): ILocationModalState => {
  switch (action.type) {
    case ELocationModalActions.ShowLocationModal: {
      return {
        ...state,
        modalShowed: true,
      };
    }
    case ELocationModalActions.HideLocationModal: {
      return {
        ...state,
        modalShowed: false,
      };
    }
    default:
      return state;
  }
};
