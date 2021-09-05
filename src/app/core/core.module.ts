import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { InfoBlockComponent } from './components/header/info-block/info-block.component';

@NgModule({
  declarations: [HeaderComponent, InfoBlockComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
