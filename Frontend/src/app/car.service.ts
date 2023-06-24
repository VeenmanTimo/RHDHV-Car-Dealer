import { Injectable } from '@angular/core';
import { CarEndpointsClient } from './generated/car_pb_service';
import {
  CreateCarRequest,
  CreateCarResponse,
  GetAllRequest,
  GetAllResponse,
} from './generated/car_pb';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private client: CarEndpointsClient;

  constructor() {
    this.client = new CarEndpointsClient('https://localhost:7213');
  }

  getAll(): void {
    const request = new GetAllRequest();
    this.client.getAll(request, (error, response: GetAllResponse | null) => {
      console.log('Error: ' + error);
      console.log(response?.getCarsList());
    });
  }

  create(request: CreateCarRequest): void {
    this.client.createCar(
      request,
      (error, response: CreateCarResponse | null) => {
        console.log('Error: ' + error);
        console.log(response);
      }
    );
  }
}
