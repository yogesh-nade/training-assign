import { Component, signal,  WritableSignal } from '@angular/core';
import { httpServiceImpl ,httpService} from '../services/httpService';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-city-component',
  imports: [RouterLink],
  templateUrl: './city-component.html',
  styleUrl: './city-component.css',
  providers: [{provide: httpService, useClass: httpServiceImpl}]
})
export class CityComponent {
    cities:WritableSignal<string[]> = signal<string[]>([]);
    message:WritableSignal<string> = signal<string>("");

    constructor(private service:httpService){}
    ngOnInit() {
        this.fetchCities();
    }
    fetchCities():void{
        this.service.getCities().subscribe({
            next: (response) => {
                const cityList = response.body?.data || [];
                this.cities.set(cityList);
            },
            error: (e: any) => {
                this.message.set("Error fetching cities.");
            }
        });
    }
}
