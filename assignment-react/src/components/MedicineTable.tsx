// Question 1: Component that takes props as an array of Products (Medicine)
// and generates an HTML table to display details

import { Medicine } from '@/models/Medicine';

interface MedicineTableProps {
  medicines: Medicine[];
}

export default function MedicineTable({ medicines }: MedicineTableProps) {
  return (
    <div style={{ margin: '20px' }}>
      <h2>Medicine Table</h2>
      <table border={1} cellPadding={10} cellSpacing={0} style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine.id}>
              <td>{medicine.id}</td>
              <td>{medicine.Title}</td>
              <td>${medicine.Price.toFixed(2)}</td>
              <td>{medicine.ExpiryDate.toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
