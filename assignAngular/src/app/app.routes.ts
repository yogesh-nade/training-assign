import { Routes } from '@angular/router';
import { Number } from './number/number';
import { CountryDropdown } from './country-dropdown/country-dropdown';
import { MedicineComponent } from './medicine/medicine';
import { Source } from './source/source';
import { Destination } from './destination/destination';
import { PromiseObservable } from './promise-observable/promise-observable';
import { WeatherComponent } from './weather/weather';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { IncrementCounter } from './increment-counter/increment-counter';
import { NgStyleClass } from './ng-style-class/ng-style-class';
import { MedicineInfo } from './medicine-info/medicine-info';

export const routes: Routes = [
  { path: '', redirectTo: '/number', pathMatch: 'full' },
  { path: 'number', component: Number },
  { path: 'country', component: CountryDropdown },
  { path: 'medicine', component: MedicineComponent },
  { path: 'source', component: Source },
  { path: 'destination/:id/:name/:email', component: Destination },
  { path: 'promise-observable', component: PromiseObservable },
  { path: 'weather', component: WeatherComponent },
  { path: 'two-way-binding', component: TwoWayBinding },
  { path: 'increment-counter', component: IncrementCounter },
  { path: 'ng-style-class', component: NgStyleClass },
  { path: 'medicine-info', component: MedicineInfo }
];
