//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

var searchInput = document.getElementById("search-input");
var searchBtn = document.getElementById("search-button");
var searchForm = document.getElementById("search-form");
var citiesList = document.getElementById("locationList");
var savedCitiesButtons = document.getElementsByClassName("savedCities");

var getLocalStorage = JSON.parse(localStorage.getItem("cities"));
var array = [];

// sets up local storage
if (getLocalStorage == null || getLocalStorage.length == 0) {
  localStorage.setItem("cities", JSON.stringify(array));
}

var apiKey = "7790a821eef7813b147ba03c132c329b";
var baseURL = "https://api.openweathermap.org/data/2.5/";
var currentURL = baseURL + `weather?appid=${apiKey}&units=metric&`;
var forecastURL = baseURL + `forecast?appid=${apiKey}&units=metric&`;
var iconURL = "https://openweathermap.org/img/w/";

function getFormInput() {
  $(searchForm).on("submit", (event) => {
    event.preventDefault();
    var cityName = searchInput.value;
    //console.log("getForm ran");
    displayCurrentWeather(cityName);
    saveAndShowCity();
    searchInput.value = "";
    showCity();
  });
}
getFormInput();

function cityFromSavedList() {
  $(citiesList).on("click", function (e) {
    var cityName = e.target.innerText;
    //console.log("citySavedList ran");
    displayCurrentWeather(cityName);
  });
}
cityFromSavedList();

function displayCurrentWeather(cityName) {
  //currentURL
  $.get(currentURL + `q=${cityName}`).then((city) => {
    var cityName = city.name;
    var temp = city.main.temp;
    var wind = city.wind.speed;
    var humidity = city.main.humidity;
    var currentTime = dayjs().format("DD/MM/YYYY");
    var currentIcon = iconURL + city.weather[0].icon + ".png";
    // convert m/s to km/h *NOTE: OBSOLETE, NO LONGER USED.
    // var windConverted = (wind * 3.6).toFixed(2);
    var lat = city.coord.lat;
    var lon = city.coord.lon;
    
    // ALT + 0176 = ° (celsius)
    // main dashboard
    // prettier-ignore
    $("#today").html(`
        <h4>
        ${cityName} (${currentTime})
        <img src="${currentIcon}"/>
        </h4>
        <p>Temp: ${Math.round(temp)}°C</p>
        <p>Wind: ${wind} KPH</p>
        <p>Humidity: ${humidity}%</p>
        `)