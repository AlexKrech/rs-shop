import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ICatalogState } from '../state/catalog.state';

const selectLocation = (state: IAppState) => state.catalog;

export const selectIsCatalogModalShowed = createSelector(
  selectLocation,
  (state: ICatalogState) => state.isCatalogModalShowed
);

export const selectIsSubCategoryListModalShowed = createSelector(
  selectLocation,
  (state: ICatalogState) => state.isSubCategoryListModalShowed
);

export const selectCategoriesList = createSelector(
  selectLocation,
  (state: ICatalogState) => state.categoriesList
);

export const selecSelectedCategory = createSelector(
  selectLocation,
  (state: ICatalogState) => state.selectedCategory
);

export const selectSelectedSubCategory = createSelector(
  selectLocation,
  (state: ICatalogState) => state.selectedSubCategory
);
