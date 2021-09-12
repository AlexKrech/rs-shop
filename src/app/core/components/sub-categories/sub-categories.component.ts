import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCategory } from '../../store/selectors/catalog.selector';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubCategoriesComponent {
  public category = this.store.pipe(select(selectCategory));

  constructor(private store: Store<IAppState>) {}
}
