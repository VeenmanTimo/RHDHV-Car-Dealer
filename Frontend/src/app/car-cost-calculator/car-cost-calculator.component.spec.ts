import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCostCalculatorComponent } from './car-cost-calculator.component';

describe('CarCostCalculatorComponent', () => {
  let component: CarCostCalculatorComponent;
  let fixture: ComponentFixture<CarCostCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarCostCalculatorComponent]
    });
    fixture = TestBed.createComponent(CarCostCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
