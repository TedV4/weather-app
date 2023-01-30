// let weather = { location: "why no", temperature: "", humidity: "", wind: "" };
const locationForm = document.getElementById("locationForm");
const locationName = document.getElementById("locationName");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=03c0b915c9fbaaf599e9d894ffbf6cf1&units=imperial`,
      { mode: "cors" }
    );

    const weatherData = await response.json();

    locationName.textContent = weatherData.name;
    temp.textContent = `${weatherData.main.temp}° F`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    wind.textContent = `Wind: ${weatherData.wind.speed}mph`;
  } catch (err) {
    locationName.textContent = "Location not found.";
    temp.textContent = "";
    humidity.textContent = "";
    wind.textContent = "";
  }
}

locationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  getWeather(searchBar.value);
  locationForm.reset();
});

getWeather("London");
