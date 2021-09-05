import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-location',
  templateUrl: './choose-location.component.html',
  styleUrls: ['./choose-location.component.scss'],
})
export class ChooseLocationComponent {
  public closeModal(): void {
    console.log('close');
  }
}
