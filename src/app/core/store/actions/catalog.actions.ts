import { Action } from '@ngrx/store';
import { ICategory } from '../state.models';

export enum ECatalogActions {
  ShowCatalog = 'Show Catalog',
  HideCatalog = 'Hide Catalog',
  FethCategories = 'Feth Categories',
  FethCategoriesSuccess = 'Feth Categories Success',
  SelectInitCategory = 'Select Init Category',
  SelectCategory = 'Select Category',
  SelectCategorySuccess = 'Select Category Success',
}

export class ShowCatalog implements Action {
  public readonly type = ECatalogActions.ShowCatalog;
}

export class HideCatalog implements Action {
  public readonly type = ECatalogActions.HideCatalog;
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

export type CatalogAction =
  | ShowCatalog
  | HideCatalog
  | FethCategories
  | FethCategoriesSuccess
  | SelectInitCategory
  | SelectCategory
  | SelectCategorySuccess;
