import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { HideAccountModal } from '../../store/actions/account-modal.actions';
import { Login } from '../../store/actions/account.actions';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-entrance-modal',
  templateUrl: './entrance-modal.component.html',
  styleUrls: ['./entrance-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntranceModalComponent {
  constructor(private store: Store<IAppState>) {}

  public hideEnterenceAccountModal(event: Event): void {
    const target = <HTMLElement>event.target;

    if (
      target.classList.contains('entrance-modal__wrapper') ||
      target.classList.contains('entrance-modal__close-btn')
    ) {
      this.store.dispatch(new HideAccountModal());
    }
  }

  public enterInSystem(email: string, password: string): void {
    if (email.length > 0 && password.length > 0) {
      this.store.dispatch(new Login(email));
      this.store.dispatch(new HideAccountModal());
    }
  }
}
