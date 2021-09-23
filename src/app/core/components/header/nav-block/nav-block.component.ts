import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ShowAccountModal } from 'src/app/core/store/actions/account-modal.actions';
import { CheckLogin, LogOut } from 'src/app/core/store/actions/account.actions';
import {
  FethCategories,
  HideCatalog,
  HideSubCategoryList,
  SelectInitCategory,
  SelectSubCategory,
  ShowCatalog,
  ShowSubCategoryList,
} from 'src/app/core/store/actions/catalog.actions';
import { selectAccountModalState } from 'src/app/core/store/selectors/account-modal.selector';
import {
  selectAccountData,
  selectAccountState,
} from 'src/app/core/store/selectors/account.selector';
import {
  selectCategoriesList,
  selectIsCatalogModalShowed,
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

  public catalogShowedObs = this.store.pipe(select(selectIsCatalogModalShowed));

  public subCategoryListModalShowed = false;

  public categories: ICategory[] | null = null;

  public subcategories: ISubCategoryInfo[] | null = null;

  public searchString: string = '';

  public isAccountModalShowed = false;

  public isLogined = this.store.select(selectAccountState);

  public accountData = this.store.select(selectAccountData);

  public isEnterenceAccountModalShowed = this.store.select(
    selectAccountModalState
  );

  constructor(private store: Store<IAppState>, private router: Router) {}

  public ngOnInit(): void {
    document.body.addEventListener('click', this.hideCatalog.bind(this));
    document.body.addEventListener(
      'click',
      this.hideSubCategoryList.bind(this)
    );

    document.body.addEventListener('click', this.hideMoreContacts.bind(this));

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

    this.store.dispatch(new CheckLogin());
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

  public showSubCategoryList(searchString: string): void {
    if (searchString.length >= 2) {
      this.store.dispatch(new ShowSubCategoryList());
    }
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

  public selectSubCategory(subCategory: ISubCategoryInfo): void {
    this.store.dispatch(new SelectSubCategory(subCategory));
    this.store.dispatch(new HideSubCategoryList());
  }

  public clearSearchString(): void {
    this.searchString = '';
    this.subcategories = null;
    this.store.dispatch(new HideSubCategoryList());
  }

  public searchGoodsBySearchString(searchString: string): void {
    this.store.dispatch(new HideSubCategoryList());

    this.router.navigate(['/search'], {
      queryParams: {
        text: searchString,
      },
    });
  }

  public showAccountModal(): void {
    if (this.isAccountModalShowed) return;

    const moreContactsBtn = document.querySelector('.nav-block__account-btn');

    setTimeout(() => {
      this.isAccountModalShowed = true;
      moreContactsBtn?.classList.add('dropdown-content_open');
    }, 0);
  }

  public hideMoreContacts(): void {
    this.isAccountModalShowed = false;
    const moreContactsBtn = document.querySelector('.nav-block__account-btn');
    moreContactsBtn?.classList.remove('dropdown-content_open');
  }

  public showEnterenceAccountModal(): void {
    this.store.dispatch(new ShowAccountModal());
  }

  public outOfSystem(): void {
    this.store.dispatch(new LogOut());
  }
}
