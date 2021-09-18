import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { debounceTime, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { CategoriesService } from '../../services/categories.service';
import {
  ECatalogActions,
  FethCategories,
  FethCategoriesSuccess,
  SelectCategory,
  SelectCategorySuccess,
  SelectSubCategory,
  SelectSubCategorySuccess,
} from '../actions/catalog.actions';
import { selectCategoriesList } from '../selectors/catalog.selector';
import { ISubCategoryInfo } from '../state.models';
import { IAppState } from '../state/app.state';

@Injectable()
export class CatalogEffects {
  fethCategories = createEffect(() =>
    this.actions$.pipe(
      ofType<FethCategories>(ECatalogActions.FethCategories),
      switchMap(() => this.categoriesService.fethCategories()),
      withLatestFrom(this.categoriesService.fethCategoriesIco()),
      map(([data, icons]) => {
        data.forEach((item) => {
          const iconObj = icons.filter((icon) => icon.id === item.id);
          const trustedUrl = this.sanitizer.bypassSecurityTrustHtml(
            iconObj[0].icon
          );
          // eslint-disable-next-line no-param-reassign
          item.ico = trustedUrl;
        });
        return data;
      }),
      switchMap((data) => of(new FethCategoriesSuccess(data)))
    )
  );

  selectCategory = createEffect(() =>
    this.actions$.pipe(
      ofType<SelectCategory>(ECatalogActions.SelectCategory),
      debounceTime(500),
      switchMap((data) => of(new SelectCategorySuccess(data.payload)))
    )
  );

  selectSubCategory = createEffect(
    (actionData: ISubCategoryInfo | null = null) =>
      this.actions$.pipe(
        ofType<SelectSubCategory>(ECatalogActions.SelectSubCategory),
        switchMap((action) => {
          // eslint-disable-next-line no-param-reassign
          actionData = action.payload;
          return this.store.pipe(select(selectCategoriesList));
        }),
        map((categoryList) =>
          categoryList?.find((category) =>
            category.subCategories.includes(actionData!)
          )
        ),
        switchMap((selectedCategory) =>
          this.categoriesService.fethSubCategoryItems(
            selectedCategory!.id,
            actionData!.id
          )
        ),
        switchMap((shopItemList) => of(new SelectSubCategorySuccess(shopItemList)))
      )
  );

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
    private store: Store<IAppState>,
    private sanitizer: DomSanitizer
  ) {}
}
