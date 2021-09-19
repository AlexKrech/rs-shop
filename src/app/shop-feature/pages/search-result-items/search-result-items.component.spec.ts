import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultItemsComponent } from './search-result-items.component';

describe('SearchResultItemsComponent', () => {
  let component: SearchResultItemsComponent;
  let fixture: ComponentFixture<SearchResultItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
