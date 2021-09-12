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

@NgModule({
  declarations: [
    HeaderComponent,
    InfoBlockComponent,
    ChooseLocationComponent,
    ChooseLocationComponent,
    NavBlockComponent,
    NotFoundComponent,
    CatalogComponent,
    SubCategoriesComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [HeaderComponent, ChooseLocationComponent, NotFoundComponent],
})
export class CoreModule {}
