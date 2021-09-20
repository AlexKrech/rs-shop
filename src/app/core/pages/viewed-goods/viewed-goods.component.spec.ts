import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedGoodsComponent } from './viewed-goods.component';

describe('ViewedGoodsComponent', () => {
  let component: ViewedGoodsComponent;
  let fixture: ComponentFixture<ViewedGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewedGoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewedGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
