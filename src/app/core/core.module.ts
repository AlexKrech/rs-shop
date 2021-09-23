import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { InfoBlockComponent } from './components/header/info-block/info-block.component';
import { ChooseLocationComponent } from './components/choose-location/choose-location.component';
import { NavBlockComponent } from './components/header/nav-block/nav-block.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { OrderBasketComponent } from './pages/order-basket/order-basket.component';
import { SelectedProductsComponent } from './pages/selected-products/selected-products.component';
import { ViewedGoodsComponent } from './pages/viewed-goods/viewed-goods.component';
import { EntranceModalComponent } from './components/entrance-modal/entrance-modal.component';
import { NavigationByCategoryComponent } from './components/navigation-by-category/navigation-by-category.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    InfoBlockComponent,
    ChooseLocationComponent,
    ChooseLocationComponent,
    NavBlockComponent,
    NotFoundComponent,
    CatalogComponent,
    SubCategoriesComponent,
    OrderBasketComponent,
    SelectedProductsComponent,
    ViewedGoodsComponent,
    EntranceModalComponent,
    NavigationByCategoryComponent,
    FooterComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    HeaderComponent,
    ChooseLocationComponent,
    NotFoundComponent,
    OrderBasketComponent,
    SelectedProductsComponent,
    ViewedGoodsComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
