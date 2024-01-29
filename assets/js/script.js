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