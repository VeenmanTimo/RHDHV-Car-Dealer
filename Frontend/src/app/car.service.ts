import { Injectable } from '@angular/core';
import { CarEndpointsClient, ServiceError } from './generated/car_pb_service';
import {
  Car,
  CreateCarRequest,
  CreateCarResponse,
  GetAllRequest,
  GetAllResponse,
} from './generated/car_pb';
import { Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private client: CarEndpointsClient;

  constructor() {
    this.client = new CarEndpointsClient('https://localhost:7213');
    this.getAll();
  }

  carList: Car[] = [];
  cars: Subject<Car[]> = new Subject();

  createError: ServiceError | undefined;

  getAll(): void {
    const request = new GetAllRequest();
    this.client.getAll(request, (error, response: GetAllResponse | null) => {
      console.log('Error: ' + error);
      console.log(response?.getCarsList());
      this.carList = response?.getCarsList() ?? [];
      this.cars.next(this.carList);
    });
  }

  create(request: CreateCarRequest): void {
    this.createError = undefined;

    this.client.createCar(
      request,
      (error, response: CreateCarResponse | null) => {
        if (error) this.createError = error;
        if (response) console.log(response);
        let car = response?.getCar();
        if (car) {
          this.carList.push(car);
          this.cars.next(this.carList);
        }
      }
    );
  }
}
