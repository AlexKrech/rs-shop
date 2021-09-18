import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectSelectedSubCategory } from 'src/app/core/store/selectors/catalog.selector';
import { ISubCategoryInfo } from 'src/app/core/store/state.models';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.scss'],
})
export class CategoryItemsComponent implements OnInit {
  public category: string = '';

  public selectedSubCategory: ISubCategoryInfo | null = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store<IAppState>
  ) {
    this.activateRoute.params.subscribe((params) => {
      this.category = params.category;
    });
  }

  public ngOnInit(): void {
    this.store
      .pipe(select(selectSelectedSubCategory))
      .subscribe((selectedSubCategory) => {
        this.selectedSubCategory = selectedSubCategory;
      });
  }
}
