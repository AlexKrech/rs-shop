import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { CategoryItemsComponent } from './pages/category-items/category-items.component';
import { SearchResultItemsComponent } from './pages/search-result-items/search-result-items.component';

@NgModule({
  declarations: [
    MainComponent,
    CategoryItemsComponent,
    SearchResultItemsComponent,
  ],
  imports: [CommonModule],
  exports: [MainComponent, CategoryItemsComponent, SearchResultItemsComponent],
})
export class ShopFeatureModule {}
