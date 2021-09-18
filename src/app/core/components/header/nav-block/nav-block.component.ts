import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  FethCategories,
  HideCatalog,
  SelectInitCategory,
  SelectSubCategory,
  ShowCatalog,
} from 'src/app/core/store/actions/catalog.actions';
import { selectCategoriesList } from 'src/app/core/store/selectors/catalog.selector';
import { ICategory, ISubCategoryInfo } from 'src/app/core/store/state.models';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-nav-block',
  templateUrl: './nav-block.component.html',
  styleUrls: ['./nav-block.component.scss'],
})
export class NavBlockComponent implements OnInit {
  public catalogShowed = false;

  public categories: ICategory[] | null = null;

  public subcategories: ISubCategoryInfo[] | null = null;

  public searchString: string = '';

  constructor(private store: Store<IAppState>) {}

  public ngOnInit(): void {
    document.body.addEventListener('click', this.hideCatalog.bind(this));

    this.store.pipe(select(selectCategoriesList)).subscribe((categories) => {
      const subCategoriesList: ISubCategoryInfo[] = [];
      this.categories = categories;
      if (categories) {
        categories.forEach((category) => {
          subCategoriesList.push(...category.subCategories);
        });

        const filteredSubCategoriesList = subCategoriesList.filter((category) =>
          category.name.toLowerCase().includes(this.searchString)
        );

        this.subcategories = filteredSubCategoriesList;
      }
    });
  }

  public showCatalog(): void {
    if (this.catalogShowed) return;

    this.store.dispatch(new FethCategories());

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
    } else {
      this.subcategories = null;
    }
  }

  public selectSubCategory(subCategory: ISubCategoryInfo) {
    this.store.dispatch(new SelectSubCategory(subCategory));
  }
}
