import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { IShopItem } from 'src/app/core/store/state.models';

@Component({
  selector: 'app-search-result-items',
  templateUrl: './search-result-items.component.html',
  styleUrls: ['./search-result-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultItemsComponent implements OnInit {
  public goodsList?: Observable<IShopItem[]>;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  public ngOnInit(): void {
    this.goodsList = this.route.queryParams.pipe(
      switchMap((params) =>
        this.categoriesService.fethGoodsBySearchString(params.text)
      )
    );
  }
}
