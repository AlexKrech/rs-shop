import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { InfoBlockComponent } from './components/header/info-block/info-block.component';
import { ChooseLocationComponent } from './components/choose-location/choose-location.component';
import { NavBlockComponent } from './components/header/nav-block/nav-block.component';

@NgModule({
  declarations: [
    HeaderComponent,
    InfoBlockComponent,
    ChooseLocationComponent,
    ChooseLocationComponent,
    NavBlockComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, ChooseLocationComponent],
})
export class CoreModule {}
