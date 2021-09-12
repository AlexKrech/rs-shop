import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory, ICategoryIco } from '../store/state.models';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  public fethCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('http://localhost:3004/categories');
  }

  public fethCategoriesIco(): Observable<ICategoryIco[]> {
    return this.http.get<ICategoryIco[]>('../../../assets/categoryIcons.json');
  }
}
