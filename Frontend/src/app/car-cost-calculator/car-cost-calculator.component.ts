import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarService } from '../car.service';
import { Car } from '../generated/car_pb';
import { CarCostBreakdown } from '../carCostBreakdown';

@Component({
  selector: 'app-car-cost-calculator',
  templateUrl: './car-cost-calculator.component.html',
  styleUrls: ['./car-cost-calculator.component.css'],
})
export class CarCostCalculatorComponent {
  constructor(public carService: CarService) {
    carService.cars.subscribe((value) => {
      this.carList = value;
      this.sort();
    });
    this.carList = carService.carList;
    this.sort();
  }

  carList: Car[] = [];
  sortedCarCosts: CarCostBreakdown[] = [];

  inputForm = new FormGroup({
    expectedMontlyDistance: new FormControl(250),
    expectedPriceOfFuel: new FormControl(0.66),
    expectedYears: new FormControl(4),
  });

  sort() {
    var input = this.inputForm.value;
    const montlyDistance = input.expectedMontlyDistance ?? 0;
    const priceOfFuel = input.expectedPriceOfFuel ?? 0;
    const years = input.expectedYears ?? 0;

    let carCostList: CarCostBreakdown[] = [];
    this.carList.forEach((car) => {
      const totalMaintenanceCost = car.getAnnualMaintenanceCost() * years;

      const totalFuelCost =
        montlyDistance * 12 * years * car.getFuelComsumption() * priceOfFuel;

      const totalCost = car.getPrice() + totalMaintenanceCost + totalFuelCost;

      const breakDown: CarCostBreakdown = {
        car,
        totalMaintenanceCost,
        totalFuelCost,
        totalCost,
        yearlyCost: totalCost / years,
      };
      carCostList.push(breakDown);
    });
    carCostList.sort((a, b) => a.totalCost - b.totalCost);
    this.sortedCarCosts = carCostList;
  }
}
