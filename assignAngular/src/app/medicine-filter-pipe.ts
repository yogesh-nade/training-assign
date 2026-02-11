import { Pipe, PipeTransform } from '@angular/core';
import { Medicine } from './models/medicine';

@Pipe({
  name: 'medicineFilter',
  standalone: true
})
export class MedicineFilterPipe implements PipeTransform {

  transform(medicines: Medicine[], category: string): Medicine[] {
    if (!medicines || !category || category.trim() === '') {
      return medicines;
    }
    
    return medicines.filter(medicine => 
      medicine.category.toLowerCase().includes(category.toLowerCase())
    );
  }

}
