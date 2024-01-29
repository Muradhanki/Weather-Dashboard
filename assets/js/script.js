//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

var searchInput = document.getElementById("search-input");
var searchBtn = document.getElementById("search-button");
var searchForm = document.getElementById("search-form");
var citiesList = document.getElementById("locationList");
var savedCitiesButtons = document.getElementsByClassName("savedCities");

var getLocalStorage = JSON.parse(localStorage.getItem("cities"));
var array = [];