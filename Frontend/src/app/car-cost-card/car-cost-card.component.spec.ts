import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCostCardComponent } from './car-cost-card.component';

describe('CarCostCardComponent', () => {
  let component: CarCostCardComponent;
  let fixture: ComponentFixture<CarCostCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarCostCardComponent]
    });
    fixture = TestBed.createComponent(CarCostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
