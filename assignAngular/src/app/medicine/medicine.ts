import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Medicine } from '../models/medicine';
import { MedicineFilterPipe } from '../medicine-filter-pipe';

@Component({
  selector: 'app-medicine',
  imports: [CommonModule, FormsModule, MedicineFilterPipe],
  templateUrl: './medicine.html',
  styleUrl: './medicine.css',
})
export class MedicineComponent {
  medicines: Medicine[] = [
    new Medicine('Aspirin', new Date(2025, 5, 15), 150, 'Painkiller'),
    new Medicine('Paracetamol', new Date(2026, 3, 20), 80, 'Painkiller'),
    new Medicine('Cough Syrup', new Date(2024, 11, 30), 245, 'Cold'),
    new Medicine('Antibiotics', new Date(2025, 8, 10), 350, 'Antibiotic'),
    new Medicine('Vitamin C', new Date(2027, 1, 5), 120, 'Vitamin'),
    new Medicine('Eye Drops', new Date(2025, 6, 25), 180, 'Eye Care'),
    new Medicine('Cough Tablets', new Date(2024, 10, 15), 200, 'Cold'),
    new Medicine('Insulin', new Date(2025, 9, 18), 1500, 'Diabetes'),
    new Medicine('Glucose', new Date(2026, 7, 22), 100, 'Diabetes'),
    new Medicine('Ibuprofen', new Date(2025, 4, 12), 220, 'Painkiller')
  ];

  categoryFilter: string = '';
}
