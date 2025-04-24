import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = () => {
    // Will adding the api here after !
    console.log("Searching for:", city);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>

      <div>
        <input 
          type="text"
          placeholder="Type a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {weatherData && (
        <div className="weather-info">
          <h2>City: {weatherData.name}</h2>
          <p>Temp: {weatherData.temp}°C</p>
          <p>Weather: {weatherData.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
