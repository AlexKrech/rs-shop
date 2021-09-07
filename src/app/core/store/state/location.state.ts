import { ILocationResponseData } from 'src/app/shared/models/location-by-search-string';

export interface ILocationState {
  locationList: ILocationResponseData[] | null;
  selectedLocation: string | null;
}

export const initialLocationState: ILocationState = {
  locationList: null,
  selectedLocation: null,
};
