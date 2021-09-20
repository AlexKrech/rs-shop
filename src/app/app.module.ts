import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { appReducer } from './core/store/reducers/app.reducers';
import { LocationEffects } from './core/store/effects/location.effects';
import { ShopFeatureModule } from './shop-feature/shop-feature.module';
import { MainComponent } from './shop-feature/pages/main/main.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { CatalogEffects } from './core/store/effects/catalog.effects';
import { CategoryItemsComponent } from './shop-feature/pages/category-items/category-items.component';
import { SearchResultItemsComponent } from './shop-feature/pages/search-result-items/search-result-items.component';
import { OrderBasketComponent } from './core/pages/order-basket/order-basket.component';
import { SelectedProductsComponent } from './core/pages/selected-products/selected-products.component';
import { ViewedGoodsComponent } from './core/pages/viewed-goods/viewed-goods.component';
import { AccountEffects } from './core/store/effects/account.effects';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'order', component: OrderBasketComponent, pathMatch: 'full' },
  {
    path: 'selected-products',
    component: SelectedProductsComponent,
    pathMatch: 'full',
  },
  { path: 'viewed', component: ViewedGoodsComponent, pathMatch: 'full' },
  { path: 'search', component: SearchResultItemsComponent, pathMatch: 'full' },
  { path: ':category', component: CategoryItemsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    ShopFeatureModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([LocationEffects, CatalogEffects, AccountEffects]),
    !environment.production
      ? StoreDevtoolsModule.instrument({ logOnly: environment.production })
      : [],
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
