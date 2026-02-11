// Question 4: Component that takes city name from textbox and stores it in state
// on button click. Enter five cities one by one. Another button displays all cities
// in a html ul list. If no city, display "No city available"

'use client';

import { useState } from 'react';

export default function CityManager() {
  const [cityInput, setCityInput] = useState<string>('');
  const [cities, setCities] = useState<string[]>([]);
  const [showCities, setShowCities] = useState<boolean>(false);

  const handleAddCity = () => {
    if (cityInput.trim() !== '') {
      setCities([...cities, cityInput.trim()]);
      setCityInput('');
      setShowCities(false);
    } else {
      alert('Please enter a city name');
    }
  };

  const handleDisplayCities = () => {
    setShowCities(true);
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>City Manager</h2>
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          placeholder="Enter city name"
          style={{ padding: '5px', marginRight: '10px', width: '200px' }}
        />
        <button onClick={handleAddCity} style={{ padding: '5px 15px', cursor: 'pointer', marginRight: '10px' }}>
          Add City
        </button>
        <button onClick={handleDisplayCities} style={{ padding: '5px 15px', cursor: 'pointer' }}>
          Display All Cities
        </button>
      </div>

      {showCities && (
        <div>
          {cities.length === 0 ? (
            <p style={{ color: 'red', fontWeight: 'bold' }}>No city available</p>
          ) : (
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {cities.map((city, index) => (
                <li key={index}>{city}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
        Cities added: {cities.length}
      </p>
    </div>
  );
}
