// Question 3b: Function component that passes string array and event handler
// to the listbox component

'use client';

import CityListbox from './CityListbox';

export default function CityListboxContainer() {
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Mumbai', 'Delhi', 'Bangalore'];

  const handleCityChange = (city: string) => {
    alert(`You selected: ${city}`);
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>City Listbox Demo</h2>
      <CityListbox cities={cities} onChange={handleCityChange} />
    </div>
  );
}
