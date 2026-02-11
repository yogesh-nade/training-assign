// Question 3a: Function component to create a html listbox (not dropdown)
// that shows names of cities. On selection, display cityname in alert box.

interface CityListboxProps {
  cities: string[];
  onChange: (city: string) => void;
}

export default function CityListbox({ cities, onChange }: CityListboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value;
    if (selectedCity) {
      onChange(selectedCity);
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <h3>Select a City:</h3>
      <select
        size={5}
        onChange={handleChange}
        style={{ width: '200px', padding: '5px', fontSize: '16px' }}
      >
        <option value="">-- Select City --</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
