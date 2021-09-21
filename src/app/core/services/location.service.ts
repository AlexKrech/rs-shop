import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { URL_TO_CITIES } from 'src/app/shared/consts';

import {
  ILocationResponseData,
  ILocationsBySearchString,
} from 'src/app/shared/models/location-by-search-string';
import { IAppState } from '../store/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient, private store: Store<IAppState>) {}

  getLocationSearchString(searchString: string) {
    return this.http.get<ILocationsBySearchString>(URL_TO_CITIES).pipe(
      map((data) => {
        let result: ILocationResponseData[] | null = data.cities.filter(
          (city) => city.name.toLowerCase().includes(searchString.toLowerCase())
        );

        if (result.length === 0) {
          result = null;
        }

        return result;
      })
    );
  }
}
