import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { InfoBlockComponent } from './components/header/info-block/info-block.component';
import { ChooseLocationComponent } from './components/choose-location/choose-location.component';

@NgModule({
  declarations: [
    HeaderComponent,
    InfoBlockComponent,
    ChooseLocationComponent,
    ChooseLocationComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, ChooseLocationComponent],
})
export class CoreModule {}
