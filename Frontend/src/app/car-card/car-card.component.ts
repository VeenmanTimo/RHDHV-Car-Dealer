import { Component, Input } from '@angular/core';
import { Car } from '../generated/car_pb';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
})
export class CarCardComponent {
  @Input() car: Car | undefined;
}
