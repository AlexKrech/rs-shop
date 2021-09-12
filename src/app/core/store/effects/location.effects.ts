import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { LocationService } from '../../services/location.service';

import {
  ELocationActions,
  FethLocations,
  FethLocationsSuccess,
  GetInitialLocation,
  GetInitialLocationSuccess,
} from '../actions/location.actions';
import { IAppState } from '../state/app.state';

@Injectable()
export class LocationEffects {
  chooseLocation = createEffect(() =>
    this.actions$.pipe(
      ofType<GetInitialLocation>(ELocationActions.GetInitialLocation),
      switchMap(() => this.locationService.getLocationByIp()),
      switchMap((data) => of(new GetInitialLocationSuccess(data)))
    )
  );

  fethLocation = createEffect(() =>
    this.actions$.pipe(
      ofType<FethLocations>(ELocationActions.FethLocations),
      debounceTime(500),
      switchMap((action) =>
        this.locationService.getLocationSearchString(action.payload)
      ),
      switchMap((data) => of(new FethLocationsSuccess(data)))
    )
  );

  constructor(
    private actions$: Actions,
    private locationService: LocationService,
    private store: Store<IAppState>
  ) {}
}
