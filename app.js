const searchBar = document.getElementById('searchBar');
let weather = { location: "", temperature: "", humidity: "", wind: "" };

async function getWeather(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=03c0b915c9fbaaf599e9d894ffbf6cf1&units=imperial`,
    { mode: "cors" }
  );

  const weatherData = await response.json();
  weather.location = weatherData.name;
  weather.temperature = `${weatherData.main.temp}F°`;
  weather.humidity = `${weatherData.main.humidity}%`;
  weather.wind = `${weatherData.wind.speed}mph`;

  console.log(weather);
  console.log(weatherData);
}

getWeather('London');
