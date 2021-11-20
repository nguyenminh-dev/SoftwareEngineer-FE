import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderItemViewComponent } from './cart-order-item-view.component';

describe('CartOrderItemViewComponent', () => {
  let component: CartOrderItemViewComponent;
  let fixture: ComponentFixture<CartOrderItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartOrderItemViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrderItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
