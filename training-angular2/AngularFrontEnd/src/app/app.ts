import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CityComponent } from "./city-component/city-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CityComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularFrontEnd');
}
