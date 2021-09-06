// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { select, Store } from '@ngrx/store';
// import { of } from 'rxjs';
// import { map, switchMap, withLatestFrom } from 'rxjs/operators';

// import {
//   ELocationActions,
//   ChooseLocation,
//   ChooseLocationSuccess,
// } from '../actions/location.actions';
// import { selectSelectedLocation } from '../selectors/location.selector';
// import { IAppState } from '../state/app.state';

// @Injectable()
// export class LocationEffects {
//   chooseLocation = createEffect(() =>
//     this.actions$.pipe(
//       ofType<ChooseLocation>(ELocationActions.ChooseLocation),
//       map((action) => action.payload),
//       withLatestFrom(this.store.pipe(select(selectSelectedLocation))),
//       switchMap(([locationName, locationSelector]) => {
//         const selectedVideoCard = videoCards?.find(
//           (videoCard) => videoCard.id === id
//         );
//         return of(new GetVideoCardSuccess(selectedVideoCard!));
//       })
//     )
//   );

//   constructor(
//     private actions$: Actions,
//     private youtubeService: SearchResponseService,
//     private store: Store<IAppState>
//   ) {}
// }
