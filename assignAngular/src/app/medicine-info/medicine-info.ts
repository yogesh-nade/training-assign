import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Medicine } from '../models/medicine';

@Component({
  selector: 'app-medicine-info',
  imports: [CommonModule],
  templateUrl: './medicine-info.html',
  styleUrl: './medicine-info.css',
})
export class MedicineInfo {
  medicines: Medicine[] = [
    new Medicine('Cough Syrup', new Date(2021, 10, 21), 245, 'Cold'),
    new Medicine('Aspirin', new Date(2025, 5, 15), 150, 'Painkiller'),
    new Medicine('Paracetamol', new Date(2026, 3, 20), 80, 'Painkiller'),
    new Medicine('Antibiotics', new Date(2025, 8, 10), 350, 'Antibiotic'),
    new Medicine('Vitamin C', new Date(2027, 1, 5), 120, 'Vitamin')
  ];
}
