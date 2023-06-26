import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarCardComponent } from './car-card/car-card.component';
import { CarCostCalculatorComponent } from './car-cost-calculator/car-cost-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    AddCarComponent,
    CarCardComponent,
    CarCostCalculatorComponent,    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
