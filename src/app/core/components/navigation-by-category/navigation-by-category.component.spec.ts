import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationByCategoryComponent } from './navigation-by-category.component';

describe('NavigationByCategoryComponent', () => {
  let component: NavigationByCategoryComponent;
  let fixture: ComponentFixture<NavigationByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
