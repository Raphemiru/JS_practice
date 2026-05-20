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

// FETCH WEATHER DETAILS
const fetchWeather = async () => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    const weatherData = await response.json();
    console.log(weatherData);

    // Different Weather Conditions
    const weatherIcons = {
      Clear: "clear",
      Clouds: "clouds",
      Drizzle: "drizzle",
      Rain: "rain",
      Thunderstorm: "rain",
      Snow: "snow",
      Mist: "mist",
      Smoke: "mist",
      Haze: "mist",
      Dust: "mist",
      Fog: "mist",
      Sand: "mist",
      Ash: "mist",
      Squall: "mist",
      Tornado: "mist",
    };

    const condition = weatherData.weather[0].main;
    weatherMainIcon.src = `images/${weatherIcons[condition] || "clouds"}.png`;

    temperature.textContent = weatherData.main.temp;
    city.textContent = weatherData.name;
    humidityLevel.textContent = weatherData.main.humidity;
    windSpeed.textContent = weatherData.wind.speed;
  } catch (error) {
    alert("City not found. Please try again.");
  }
};

// SEARCH FUNCTION
searchButton.addEventListener("click", (event) => {
  console.log("button clicked");
  fetchWeather();
  event.preventDefault();
});

/*
    const mistConditions = [
      "Mist",
      "Smoke",
      "Haze",
      "Dust",
      "Fog",
      "Sand",
      "Ash",
    ];
    const windConditions = ["Squall", "Tornado"];

    const condition = weatherData.weather[0].main;

    if (mistConditions.includes(condition)) {
      weatherMainIcon.src = "images/mist.png";
    } else if (windConditions.includes(condition)) {
      weatherMainIcon.src = "images/wind.png";
    } else {
      weatherMainIcon.src = `images/${condition.toLowerCase()}.png`;
    }
    */
