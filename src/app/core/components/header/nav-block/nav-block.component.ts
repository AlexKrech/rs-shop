import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CategoriesService } from 'src/app/core/services/categories.service';
import {
  ClearSubCategoryList,
  FethCategories,
  HideCatalog,
  SearchSubCategoryList,
  SelectInitCategory,
  ShowCatalog,
} from 'src/app/core/store/actions/catalog.actions';
import { selectSubCategoryList } from 'src/app/core/store/selectors/catalog.selector';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-nav-block',
  templateUrl: './nav-block.component.html',
  styleUrls: ['./nav-block.component.scss'],
})
export class NavBlockComponent implements OnInit {
  public catalogShowed = false;

  public subcategory$ = this.store.pipe(select(selectSubCategoryList));

  constructor(
    private store: Store<IAppState>,
    private categoriesService: CategoriesService
  ) {}

  public ngOnInit(): void {
    document.body.addEventListener('click', this.hideCatalog.bind(this));
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

  public searchCategory(searchString: string) {
    if (searchString.length > 2) {
      this.store.dispatch(new SearchSubCategoryList(searchString));
    } else {
      this.store.dispatch(new ClearSubCategoryList());
    }
  }
}
