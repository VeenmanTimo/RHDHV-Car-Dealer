import { Car } from './generated/car_pb';

export interface CarCostBreakdown {
  car: Car;
  totalMaintenanceCost: number;
  totalFuelCost: number;
  totalCost: number;
  yearlyCost: number;
}
