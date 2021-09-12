import { ICategory, ISubCategories } from '../state.models';

export interface ICatalogState {
  isCatalogModalShowed: boolean;
  categoriesList: ICategory[] | null;
  subcategoryList: ISubCategories[] | null;
  selectedCategory: ICategory | null;
}

export const initialCatalogState: ICatalogState = {
  isCatalogModalShowed: false,
  categoriesList: null,
  selectedCategory: null,
  subcategoryList: null,
};
