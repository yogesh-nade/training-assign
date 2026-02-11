// Import all components for React Assignment
import MedicineTable from '@/components/MedicineTable';
import NumberInput from '@/components/NumberInput';
import CityListboxContainer from '@/components/CityListboxContainer';
import CityManager from '@/components/CityManager';
import StyledButton from '@/components/StyledButton';
import { Medicine } from '@/models/Medicine';

export default function Home() {
  // Sample medicine data for Question 1
  const medicines: Medicine[] = [
    new Medicine(1, 'Aspirin', 15.99, new Date('2025-12-31')),
    new Medicine(2, 'Paracetamol', 8.50, new Date('2026-06-15')),
    new Medicine(3, 'Ibuprofen', 12.75, new Date('2025-09-30')),
    new Medicine(4, 'Amoxicillin', 25.00, new Date('2026-03-20')),
    new Medicine(5, 'Vitamin C', 18.25, new Date('2027-01-10')),
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>React Assignment - All Questions</h1>
      
      <hr style={{ margin: '30px 0' }} />
      
      {/* Question 1: Medicine Table */}
      <section>
        <h2 style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>Question 1: Medicine Table</h2>
        <MedicineTable medicines={medicines} />
      </section>

      <hr style={{ margin: '30px 0' }} />

      {/* Question 2: Number Square Root Calculator */}
      <section>
        <h2 style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>Question 2: Number Square Root Calculator</h2>
        <NumberInput />
      </section>

      <hr style={{ margin: '30px 0' }} />

      {/* Question 3: City Listbox */}
      <section>
        <h2 style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>Question 3: City Listbox</h2>
        <CityListboxContainer />
      </section>

      <hr style={{ margin: '30px 0' }} />

      {/* Question 4: City Manager */}
      <section>
        <h2 style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>Question 4: City Manager</h2>
        <CityManager />
      </section>

      <hr style={{ margin: '30px 0' }} />

      {/* Question 5: Styled Button (Class Component) */}
      <section>
        <h2 style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>Question 5: Styled Label with Color Change</h2>
        <StyledButton />
      </section>
    </div>
  );
}
