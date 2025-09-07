const cityInput = document.getElementById('city-input');
const getWeatherBtn = document.getElementById('get-weather-btn');
const weatherResult = document.getElementById('weather-result');

// Pre-defined weather data
const weatherData = {
  "New York": { temp: 25, humidity: 60, condition: "Sunny" },
  "London": { temp: 18, humidity: 70, condition: "Cloudy" },
  "Tokyo": { temp: 30, humidity: 50, condition: "Rainy" },
  "Delhi": { temp: 35, humidity: 40, condition: "Hot" }
};

getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city === '') return alert("Please enter a city name");

  const weather = weatherData[city];
  
  if (weather) {
    weatherResult.innerHTML = `
      <h2>${city}</h2>
      <p>Temperature: ${weather.temp}°C</p>
      <p>Humidity: ${weather.humidity}%</p>
      <p>Condition: ${weather.condition}</p>
    `;
  } else {
    weatherResult.innerHTML = `<p>Weather data not available for "${city}"</p>`;
  }
});
