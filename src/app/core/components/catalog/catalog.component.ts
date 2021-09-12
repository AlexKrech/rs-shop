import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SelectCategory } from '../../store/actions/catalog.actions';
import {
  selectIsCatalogModalShowed,
  selectCategoriesList,
} from '../../store/selectors/catalog.selector';
import { ICategory } from '../../store/state.models';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {
  public isShowed = this.store.pipe(select(selectIsCatalogModalShowed));

  public categories = this.store.pipe(select(selectCategoriesList));

  constructor(private store: Store<IAppState>) {}

  public selectCategory(category: ICategory): void {
    this.store.dispatch(new SelectCategory(category));
  }
}
