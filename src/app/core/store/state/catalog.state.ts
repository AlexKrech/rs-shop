import { ICategory } from '../state.models';

export interface ICatalogState {
  isCatalogModalShowed: boolean;
  categoriesList: ICategory[] | null;
  selectedCategory: ICategory | null;
}

export const initialCatalogState: ICatalogState = {
  isCatalogModalShowed: false,
  categoriesList: null,
  selectedCategory: null,
};
