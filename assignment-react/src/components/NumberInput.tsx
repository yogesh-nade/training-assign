// Question 2b: Component that takes the number from a textbox and sets the state
// with that number on button click. Uses NumberRoot component to display details.

'use client';

import { useState } from 'react';
import NumberRoot from './NumberRoot';

export default function NumberInput() {
  const [inputValue, setInputValue] = useState<string>('');
  const [number, setNumber] = useState<number | null>(null);

  const handleButtonClick = () => {
    const parsedNumber = parseFloat(inputValue);
    if (!isNaN(parsedNumber)) {
      setNumber(parsedNumber);
    } else {
      alert('Please enter a valid number');
    }
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Number Square Root Calculator</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a number"
        style={{ padding: '5px', marginRight: '10px' }}
      />
      <button onClick={handleButtonClick} style={{ padding: '5px 15px', cursor: 'pointer' }}>
        Calculate Root
      </button>

      {number !== null && <NumberRoot number={number} />}
    </div>
  );
}
