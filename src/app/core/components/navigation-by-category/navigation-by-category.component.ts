import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FethCategories } from '../../store/actions/catalog.actions';
import { selectCategoriesList } from '../../store/selectors/catalog.selector';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-navigation-by-category',
  templateUrl: './navigation-by-category.component.html',
  styleUrls: ['./navigation-by-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationByCategoryComponent implements OnInit {
  public categoryList = this.store.select(selectCategoriesList);

  constructor(private store: Store<IAppState>) {}

  public ngOnInit(): void {
    this.store.dispatch(new FethCategories());
  }
}
