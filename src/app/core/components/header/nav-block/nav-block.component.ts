import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  FethCategories,
  HideCatalog,
  HideSubCategoryList,
  SelectInitCategory,
  SelectSubCategory,
  ShowCatalog,
  ShowSubCategoryList,
} from 'src/app/core/store/actions/catalog.actions';
import {
  selectCategoriesList,
  selectIsSubCategoryListModalShowed,
} from 'src/app/core/store/selectors/catalog.selector';
import { ICategory, ISubCategoryInfo } from 'src/app/core/store/state.models';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-nav-block',
  templateUrl: './nav-block.component.html',
  styleUrls: ['./nav-block.component.scss'],
})
export class NavBlockComponent implements OnInit {
  public catalogShowed = false;

  public subCategoryListModalShowed = false;

  public categories: ICategory[] | null = null;

  public subcategories: ISubCategoryInfo[] | null = null;

  public searchString: string = '';

  constructor(private store: Store<IAppState>) {}

  public ngOnInit(): void {
    document.body.addEventListener('click', this.hideCatalog.bind(this));
    document.body.addEventListener(
      'click',
      this.hideSubCategoryList.bind(this)
    );

    this.store.pipe(select(selectCategoriesList)).subscribe((categories) => {
      const subCategoriesList: ISubCategoryInfo[] = [];
      this.categories = categories;
      if (categories) {
        categories.forEach((category) => {
          subCategoriesList.push(...category.subCategories);
        });

        const filteredSubCategoriesList = subCategoriesList.filter((category) =>
          category.name.toLowerCase().includes(this.searchString.toLowerCase())
        );

        this.subcategories = filteredSubCategoriesList;
      }
    });

    this.store
      .select(selectIsSubCategoryListModalShowed)
      .subscribe((isModalShowed) => {
        this.subCategoryListModalShowed = isModalShowed;
      });
  }

  public showCatalog(): void {
    if (this.catalogShowed) return;

    this.store.dispatch(new FethCategories());
    this.store.dispatch(new HideSubCategoryList());

    setTimeout(() => {
      this.catalogShowed = true;

      this.store.dispatch(new ShowCatalog());

      const catalogBtn = document.querySelector('.nav-block__catalog-btn');
      catalogBtn?.classList.add('nav-block__btn_open');
    }, 0);
    // TODO: remove dispatch SelectInitCategory from setTimeout
    setTimeout(() => {
      this.store.dispatch(new SelectInitCategory());
    }, 50);
  }

  public hideCatalog(event: Event): void {
    const target = <HTMLElement>event.target;

    if (target.closest('.catalog__content')) return;

    this.store.dispatch(new HideCatalog());
    this.catalogShowed = false;

    const catalogBtn = document.querySelector('.nav-block__catalog-btn');
    catalogBtn?.classList.remove('nav-block__btn_open');
  }

  public searchCategory(searchString: string): void {
    if (searchString.length >= 2) {
      this.store.dispatch(new FethCategories());
      this.store.dispatch(new ShowSubCategoryList());
    } else {
      this.subcategories = null;
      this.store.dispatch(new HideSubCategoryList());
    }
  }

  public showSubCategoryList(): void {
    this.store.dispatch(new ShowSubCategoryList());
  }

  public hideSubCategoryList(event: Event): void {
    const target = <HTMLElement>event.target;

    if (
      target.closest('.nav-block__input-wrapper') ||
      target.closest('.nav-block__subcategory-list')
    )
      return;
    this.store.dispatch(new HideSubCategoryList());
  }

  public selectSubCategory(subCategory: ISubCategoryInfo) {
    this.store.dispatch(new SelectSubCategory(subCategory));
    this.store.dispatch(new HideSubCategoryList());
  }

  public clearSearchString() {
    this.searchString = '';
    this.subcategories = null;
    this.store.dispatch(new HideSubCategoryList());
  }
}
