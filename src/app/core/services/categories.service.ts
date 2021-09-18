import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  ICategory,
  ICategoryIco,
  IShopItem,
  ISubCategoryInfo,
} from '../store/state.models';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  public fethCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('http://localhost:3004/categories');
  }

  public fethSubCategories(
    searchString: string
  ): Observable<ICategory[] | ISubCategoryInfo[]> {
    return this.http.get<ICategory[]>('http://localhost:3004/categories').pipe(
      map((categories) => {
        const subCategoriesList: ISubCategoryInfo[] = [];

        categories.forEach((category) => {
          subCategoriesList.push(...category.subCategories);
        });

        return subCategoriesList;
      }),
      map((subCategoriesList) => {
        const filteredSubCategoriesList = subCategoriesList.filter((category) =>
          category.name.toLowerCase().includes(searchString)
        );
        return filteredSubCategoriesList;
      })
    );
  }

  public fethCategoriesIco(): Observable<ICategoryIco[]> {
    return this.http.get<ICategoryIco[]>('../../../assets/categoryIcons.json');
  }

  public fethSubCategoryItems(
    categoryId: string,
    subCategoryId: string
  ): Observable<IShopItem[]> {
    return this.http.get<IShopItem[]>(
      `http://localhost:3004/goods/category/${categoryId}/${subCategoryId}`
    );
  }
}
