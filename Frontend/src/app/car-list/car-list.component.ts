import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent {
  
  constructor(private carService: CarService) {}
  
  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getAll();
  }
}
