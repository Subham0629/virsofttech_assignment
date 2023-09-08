
import React, { useState } from 'react';
import './TemperatureConverter.css';

function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('celsius');
  const [convertedTemperature, setConvertedTemperature] = useState(null);
  const [error, setError] = useState('');

  const convertToCelsius = () => {
    setError('');
    if (!isNaN(temperature)) {
      const celsius = scale === 'celsius' ? parseFloat(temperature) : (parseFloat(temperature) - 32) * (5/9);
      setConvertedTemperature(`${temperature}°F is equal to ${celsius.toFixed(2)}°C`);
    } else {
      setError('Please enter a valid number');
    }
  };

  const convertToFahrenheit = () => {
    setError('');
    if (!isNaN(temperature)) {
      const fahrenheit = scale === 'fahrenheit' ? parseFloat(temperature) : (parseFloat(temperature) * 9/5) + 32;
      setConvertedTemperature(`${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`);
    } else {
      setError('Please enter a valid number');
    }
  };

  return (
    <div className='container'>
        <h1>Temperature Converter</h1>
      <input
        type="text"
        placeholder="Enter temperature"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />
      <select value={scale} onChange={(e) => setScale(e.target.value)}>
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
      </select>
      <button onClick={convertToCelsius}>Convert to Celsius</button>
      <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
      {error && <p>{error}</p>}
      {convertedTemperature && <h2>{convertedTemperature}</h2>}
    </div>
  );
}

export default TemperatureConverter;
