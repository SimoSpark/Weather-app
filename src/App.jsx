
import { useState } from 'react';
import './App.css'; 

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  // Placeholder data for styling purposes
  const handleSearch = () => {
    console.log("Searching for:", city);
    if (city.trim()) {
      // Just for demonstration purposes
      setWeatherData({
        name: city,
        temp: Math.floor(Math.random() * 30) + 5,
        description: "Partly Cloudy",
        humidity: Math.floor(Math.random() * 100),
        wind: Math.floor(Math.random() * 20) + 1
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h1 className="app-title">Weather App</h1>

        <div className="search-box">
          <input 
            type="text"
            placeholder="Type a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            className="search-input"
          />
          <button 
            onClick={handleSearch}
            className="search-button"
          >
            Search
          </button>
        </div>

        {weatherData ? (
          <div className="weather-info">
            <div className="weather-header">
              <h2 className="city-name">{weatherData.name}</h2>
              <div className="temperature">{weatherData.temp}°C</div>
              <div className="description">{weatherData.description}</div>
            </div>
            
            <div className="weather-details">
              <div className="detail-box">
                <div className="detail-label">Humidity</div>
                <div className="detail-value">{weatherData.humidity}%</div>
              </div>
              <div className="detail-box">
                <div className="detail-label">Wind</div>
                <div className="detail-value">{weatherData.wind} km/h</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="placeholder-message">
            <div className="message-primary">Enter a city name to get the weather information</div>
            <div className="message-secondary">Weather details will appear here</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;