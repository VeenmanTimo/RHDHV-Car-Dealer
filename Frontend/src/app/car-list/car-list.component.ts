import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Car } from '../generated/car_pb';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent {
  constructor(public carService: CarService) {
    carService.cars.subscribe(value => {
      this.allCars = value;
      this.search();
    })
    this.allCars = carService.carList;
    this.search();
  }

  allCars: Car[] = [];
  filteredCars: Car[] = [];

  searchForm = new FormGroup({
    input: new FormControl(''),
  });

  search() {
    var filter = this.searchForm.value.input?.toLocaleLowerCase();
    if (filter && filter != '') {
      this.filteredCars = this.allCars.filter(
        (car) =>
          car.getModel().toLocaleLowerCase().includes(filter ?? '') ||
          car.getMake().toLocaleLowerCase().includes(filter ?? '') ||
          car.getYearOfRelease() == +(filter ?? '')
      );
    } else {
      this.filteredCars = this.allCars;
    }
  }
}
