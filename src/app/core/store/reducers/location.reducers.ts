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
    case ELocationActions.DeleteLocation: {
      return {
        ...state,
        locationList: null,
      };
    }
    case ELocationActions.GetInitialLocationSuccess: {
      return {
        ...state,
        selectedLocation: action.payload,
      };
    }

    case ELocationActions.FethLocationsSuccess: {
      return {
        ...state,
        locationList: action.payload,
      };
    }

    case ELocationActions.ClearLocations: {
      return {
        ...state,
        locationList: null,
      };
    }

    default:
      return state;
  }
};
