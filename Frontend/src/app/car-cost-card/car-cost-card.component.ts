import { Component, Input } from '@angular/core';
import { Car } from '../generated/car_pb';
import { CarCostBreakdown } from '../carCostBreakdown';

@Component({
  selector: 'app-car-cost-card',
  templateUrl: './car-cost-card.component.html',
  styleUrls: ['./car-cost-card.component.css']
})
export class CarCostCardComponent {
  @Input() costBreakdown: CarCostBreakdown | undefined;
}
