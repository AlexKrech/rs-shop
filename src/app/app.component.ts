import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'rs-shop';

  public closeModal(event: Event): void {
    const target = <HTMLElement>event.target;
    if (target.closest('.modal')) {
      return;
    }
    console.log('close');
  }
}
