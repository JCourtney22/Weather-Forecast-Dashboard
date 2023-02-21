$(document).ready(function () {

    var apiURL = "http://api.openweathermap.org/data/2.5/weather?id=524901&appid=8b6ed095ff191d87f01890c905e2502b"
    var apiKey = "8b6ed095ff191d87f01890c905e2502b"
console.log(apiURL)

var getCity = document.querySelector(".city");
var temperature = document.querySelector(".temperature");
var icon = document.querySelector(".icon");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".windSpeed");
var searchBtn = document.querySelector(".search-button");
var fiveDaysEl = document.querySelector(".fiveDays");

function getWeather(userInput) {
    let weatherInfo = fetch(
    apiURL + userInput
    );
    weatherInfo
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        var name = data[0].name;
        var latitude = data[0].lat;
        var longitude = data[0].lon;
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?lat="+
            latitude +
            "&lon=" +
            longitude +
            "&units=metric&appid=" +
            apiKey,
        )
    })
}
});