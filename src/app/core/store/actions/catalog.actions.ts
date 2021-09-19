import { Action } from '@ngrx/store';
import { ICategory, IShopItem, ISubCategoryInfo } from '../state.models';

export enum ECatalogActions {
  ShowCatalog = 'Show Catalog',
  HideCatalog = 'Hide Catalog',
  ShowSubCategoryList = 'Show SubCategory List',
  HideSubCategoryList = 'Hide SubCategory List',
  FethCategories = 'Feth Categories',
  FethCategoriesSuccess = 'Feth Categories Success',
  SelectInitCategory = 'Select Init Category',
  SelectCategory = 'Select Category',
  SelectCategorySuccess = 'Select Category Success',
  SelectSubCategory = 'Selected SubCategory',
  SelectSubCategorySuccess = 'Selected SubCategory Success',
}

export class ShowCatalog implements Action {
  public readonly type = ECatalogActions.ShowCatalog;
}

export class HideCatalog implements Action {
  public readonly type = ECatalogActions.HideCatalog;
}

export class ShowSubCategoryList implements Action {
  public readonly type = ECatalogActions.ShowSubCategoryList;
}

export class HideSubCategoryList implements Action {
  public readonly type = ECatalogActions.HideSubCategoryList;
}

export class FethCategories implements Action {
  public readonly type = ECatalogActions.FethCategories;
}

export class FethCategoriesSuccess implements Action {
  public readonly type = ECatalogActions.FethCategoriesSuccess;

  constructor(public payload: ICategory[]) {}
}

export class SelectInitCategory implements Action {
  public readonly type = ECatalogActions.SelectInitCategory;
}

export class SelectCategory implements Action {
  public readonly type = ECatalogActions.SelectCategory;

  constructor(public payload: ICategory) {}
}

export class SelectCategorySuccess implements Action {
  public readonly type = ECatalogActions.SelectCategorySuccess;

  constructor(public payload: ICategory) {}
}

export class SelectSubCategory implements Action {
  public readonly type = ECatalogActions.SelectSubCategory;

  constructor(public payload: ISubCategoryInfo) {}
}

export class SelectSubCategorySuccess implements Action {
  public readonly type = ECatalogActions.SelectSubCategorySuccess;

  constructor(public payload: IShopItem[]) {}
}

export type CatalogAction =
  | ShowCatalog
  | HideCatalog
  | ShowSubCategoryList
  | HideSubCategoryList
  | FethCategories
  | FethCategoriesSuccess
  | SelectInitCategory
  | SelectCategory
  | SelectCategorySuccess
  | SelectSubCategory
  | SelectSubCategorySuccess;
