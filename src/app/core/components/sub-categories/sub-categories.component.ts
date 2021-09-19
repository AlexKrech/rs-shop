import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SelectSubCategory } from '../../store/actions/catalog.actions';
import {
  selecSelectedCategory,
  selectIsSubCategoryListModalShowed,
} from '../../store/selectors/catalog.selector';
import { ISubCategoryInfo } from '../../store/state.models';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubCategoriesComponent {
  public category = this.store.pipe(select(selecSelectedCategory));

  public isSubCategoryModalShowed = this.store.select(
    selectIsSubCategoryListModalShowed
  );

  constructor(private store: Store<IAppState>) {}

  public selectSubCategory(subCategory: ISubCategoryInfo) {
    this.store.dispatch(new SelectSubCategory(subCategory));
    //  this.store.dispatch(new HideLocationModal());
  }
}
