import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Weather } from '../models/weather';

@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class WeatherComponent {
  weathers: Weather[] = [
    new Weather('Hot', 45, 30),
    new Weather('Cold', 10, -5),
    new Weather('Moderate', 25, 15),
    new Weather('Very Hot', 50, 35),
    new Weather('Chilly', 15, 5)
  ];

  selectedTemp: number = 0;

  selectMaxTemp(weather: Weather): void {
    this.selectedTemp = weather.maxTemp;
    weather.selectedTemp = weather.maxTemp;
  }
}
