import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { debounceTime, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { CategoriesService } from '../../services/categories.service';
import {
  ECatalogActions,
  FethCategories,
  FethCategoriesSuccess,
  SelectCategory,
  SelectCategorySuccess,
} from '../actions/catalog.actions';
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

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
    private store: Store<IAppState>,
    private sanitizer: DomSanitizer
  ) {}
}
