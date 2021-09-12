import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { catalogReducers } from './catalog.reducers';
import { locationModalReducers } from './location-modal.reducers';
import { locationReducers } from './location.reducers';

export const appReducer: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  location: locationReducers,
  locationModal: locationModalReducers,
  catalog: catalogReducers,
};
