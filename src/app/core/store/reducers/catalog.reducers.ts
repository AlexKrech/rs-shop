import { CatalogAction, ECatalogActions } from '../actions/catalog.actions';
import { ICatalogState, initialCatalogState } from '../state/catalog.state';

export const catalogReducers = (
  state = initialCatalogState,
  action: CatalogAction
): ICatalogState => {
  switch (action.type) {
    case ECatalogActions.ShowCatalog: {
      return {
        ...state,
        isCatalogModalShowed: true,
      };
    }
    case ECatalogActions.HideCatalog: {
      return {
        ...state,
        isCatalogModalShowed: false,
      };
    }
    case ECatalogActions.FethCategoriesSuccess: {
      return {
        ...state,
        categoriesList: action.payload,
      };
    }

    case ECatalogActions.SelectInitCategory: {
      return {
        ...state,
        selectedCategory: state.categoriesList![0],
      };
    }

    case ECatalogActions.SelectCategorySuccess: {
      return {
        ...state,
        selectedCategory: action.payload,
      };
    }

    default:
      return state;
  }
};
