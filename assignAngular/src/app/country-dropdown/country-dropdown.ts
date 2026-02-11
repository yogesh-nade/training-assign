import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CountryCapital {
  country: string;
  capital: string;
}

@Component({
  selector: 'app-country-dropdown',
  imports: [CommonModule],
  templateUrl: './country-dropdown.html',
  styleUrl: './country-dropdown.css',
})
export class CountryDropdown {
  countries: CountryCapital[] = [
    { country: 'India', capital: 'Delhi' },
    { country: 'USA', capital: 'Washington, D.C.' },
    { country: 'UK', capital: 'London' },
    { country: 'France', capital: 'Paris' },
    { country: 'Germany', capital: 'Berlin' },
    { country: 'Japan', capital: 'Tokyo' }
  ];

  selectedCapital: string = '';

  onCountryChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedCapital = target.value;
  }
}
