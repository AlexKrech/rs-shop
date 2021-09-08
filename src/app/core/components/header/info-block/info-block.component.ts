import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ShowLocationModal } from 'src/app/core/store/actions/location-modal.actions';
import { GetInitialLocation } from 'src/app/core/store/actions/location.actions';
import { selectSelectedLocation } from 'src/app/core/store/selectors/location.selector';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss'],
})
export class InfoBlockComponent implements OnInit {
  public location = this.store.pipe(select(selectSelectedLocation));

  public contactsShowed = false;

  constructor(private store: Store<IAppState>) {}

  public ngOnInit(): void {
    this.store.dispatch(new GetInitialLocation());
    document.body.addEventListener('click', this.hideMoreContacts.bind(this));
  }

  public chooseCity() {
    this.store.dispatch(new ShowLocationModal());
  }

  public showMoreContacts() {
    if (this.contactsShowed) return;

    const moreContactsBtn = document.querySelector(
      '.contact-list__more-contacts-btn'
    );

    setTimeout(() => {
      this.contactsShowed = true;
      moreContactsBtn?.classList.add('dropdown-content_open');
    }, 0);
  }

  public hideMoreContacts() {
    this.contactsShowed = false;
    const moreContactsBtn = document.querySelector(
      '.contact-list__more-contacts-btn'
    );
    moreContactsBtn?.classList.remove('dropdown-content_open');
  }
}
