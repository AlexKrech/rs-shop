import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { CategoryItemsComponent } from './pages/category-items/category-items.component';

@NgModule({
  declarations: [MainComponent, CategoryItemsComponent],
  imports: [CommonModule],
  exports: [MainComponent, CategoryItemsComponent],
})
export class ShopFeatureModule {}
