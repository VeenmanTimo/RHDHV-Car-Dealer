import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreateCarRequest } from '../generated/car_pb';
import { CarService } from '../car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent {
  constructor(public carService: CarService) {}

  createCarForm = new FormGroup({
    model: new FormControl(''),
    make: new FormControl(''),
    version: new FormControl(''),
    yearOfRelease: new FormControl(''),
    price: new FormControl(''),
    fuelConsumption: new FormControl(''),
    annualMaintenanceCost: new FormControl(''),
  });

  submit() {
    var values = this.createCarForm.value;
    var request = new CreateCarRequest();

    request.setModel(values.model ?? '');
    request.setMake(values.make ?? '');
    request.setVersion(values.version ?? '');
    request.setYearOfRelease(+(values.yearOfRelease ?? ''));
    request.setPrice(+(values.price ?? ''));
    request.setFuelComsumption(+(values.fuelConsumption ?? ''));
    request.setAnnualMaintenanceCost(+(values.annualMaintenanceCost ?? ''));

    this.carService.create(request);
  }
}
