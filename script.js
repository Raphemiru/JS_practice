// API
const apiKey = config.apiKey;

// SEARCHBAR/BUTTON
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// WEATHER MAIN
const weatherMainIcon = document.getElementById("weather-main-icon");
const temperature = document.getElementById("temperature");
const city = document.getElementById("city");

// WEATHER DETAILS
const humidityLevel = document.getElementById("humidity-level");
const windSpeed = document.getElementById("wind-speed");

const fetchWeather = async () => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const weatherData = await response.json();
    console.log(weatherData);
    // the other code
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

searchButton.addEventListener("click", () => {
  console.log("button clicked");
  fetchWeather();
  event.preventDefault();
});
