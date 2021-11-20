import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailModalComponent } from './food-detail-modal.component';

describe('FoodDetailModalComponent', () => {
  let component: FoodDetailModalComponent;
  let fixture: ComponentFixture<FoodDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
