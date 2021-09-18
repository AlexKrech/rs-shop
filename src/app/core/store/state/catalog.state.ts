import { ICategory, IShopItem, ISubCategoryInfo } from '../state.models';

export interface ICatalogState {
  isCatalogModalShowed: boolean;
  categoriesList: ICategory[] | null;
  selectedSubCategory: ISubCategoryInfo | null;
  selectedCategory: ICategory | null;
  selectedCategoryItems: IShopItem[] | null;
}

export const initialCatalogState: ICatalogState = {
  isCatalogModalShowed: false,
  categoriesList: null,
  selectedCategory: null,
  selectedSubCategory: null,
  selectedCategoryItems: null,
};
