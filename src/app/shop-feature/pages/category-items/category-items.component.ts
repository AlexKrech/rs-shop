import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import {
  selectCategoriesList,
} from 'src/app/core/store/selectors/catalog.selector';
import {
  ICategory,
  ISubCategoryInfo,
} from 'src/app/core/store/state.models';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.scss'],
})
export class CategoryItemsComponent implements OnInit {
  public category: string = '';

  public isCategory: boolean = false;

  public selectedSubCategory: ISubCategoryInfo | ICategory | null = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store<IAppState>
  ) {
    this.activateRoute.params.subscribe((params) => {
      this.category = params.category;
    });
  }

  public ngOnInit(): void {
    // this.activateRoute.params.subscribe((params) => {
    //   console.log(params);
    // });

    this.store
      .pipe(
        switchMap(() => this.activateRoute.params),
        withLatestFrom(this.store.pipe(select(selectCategoriesList))),
        map(([params, categoriesList]) => {
          if (categoriesList) {
            let selectedCategory: ICategory[] | ISubCategoryInfo =
              categoriesList.filter((item) => item.id === params.category);
            if (selectedCategory.length > 0) return selectedCategory;

            categoriesList.forEach((category) => {
              category.subCategories.forEach((item) => {
                if (item.id === params.category) {
                  selectedCategory = item;
                }
              });
            });
            // console.log(category);

            // console.log(params, categoriesList);
            return selectedCategory;
          }
          return null;
        })
      )
      .subscribe((category) => {
        if (Array.isArray(category)) {
          this.isCategory = true;
          [this.selectedSubCategory] = [category[0]];
        } else if (category !== null) {
          this.isCategory = false;
          this.selectedSubCategory = category;
        }
      });
  }
}
