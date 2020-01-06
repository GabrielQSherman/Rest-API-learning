//my weather data that will be used to insert into the DOM
const myWeatherData = {
    temp: 0,
    feelslike: 0,
    humidity: 0,
    windy: true,
    percipType: 'undefined',
    cloudy: 'undefined',

}

//button that grabs data and sends info through XHR
document.getElementById('button').addEventListener('click', getWeather);

//this will log a url that when clicked on brings you to a new page with the current weather in Rumford RI (02916) 
//data will be displayed as JSON code    

function getWeather() {

let userInput = document.getElementById('cityzip').value, zipcode, cityname, endPoint,

numcheck = parseInt(userInput);

//User input handling for zipcode. a check must be done to see if it is a valid zipcode
// let zipcode = document.getElementById('cityzip').value;


if (userInput.length == 5 || !isNaN(numcheck)) {
zipcode = userInput;
endPoint = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&APPID=`;
} else {
cityname = userInput.toLowerCase();
endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityname},us&APPID=`;
}

// console.log(zipcode.length);

//variables that get correct location weather data and my personal API Key for openweathermap.org
// let endPointZC = `https://api.openweathermap.org/data/2.5/weather?zip=`+ zipcode +`,us&APPID=`; 

// let endPointCN =  `https://api.openweathermap.org/data/2.5/weather?q=`+ cityname +`,us&APPID=`;

const myKey = `1d9310268663c451264a0a75aef60939`; //ENTER YOUR KEY FROM YOUR SIGN UP EMAIL HERE

endPoint += myKey + `&units=imperial`;

console.log(endPoint);

//constructor: create an instace of the Extended-Markup-Language-HyperText-Request

//XMLH is a protocall that comunicates between a client and a server

//first step creates a non-populated xmlhr object (all properties are undefined)
const xhr = new XMLHttpRequest();

//open

xhr.open('GET', endPoint, true);

//onload callback
//this is an event that will occur once per request
xhr.onload = () => {

const weatherData = JSON.parse(xhr.responseText);

console.log(weatherData);

if (weatherData.weather == undefined) {

    document.getElementById('cityzip').value = '';
    document.getElementById('cityzip').placeholder = weatherData.message;
    return;

}

//setting my local weather object to the data collected from 
myWeatherData.cloudy = weatherData.weather[0].main;
myWeatherData.temp = Math.floor(weatherData.main.temp);
myWeatherData.feelslike = Math.floor(weatherData.main.feels_like);
myWeatherData.humidity = weatherData.main.humidity;

if (weatherData.wind.speed < 5) {
    myWeatherData.windy == false;
}

document.getElementById('cityname').innerHTML = `City Name: ${weatherData.name}`;

document.getElementById('percip').innerHTML = `Percipitation:${myWeatherData.cloudy}`;

document.getElementById('humid').innerHTML = `Humidity:<br>${myWeatherData.humidity}%`;

document.getElementById('currTemp').innerHTML = `Current Temp. ${myWeatherData.temp}°F`;
document.getElementById('feelsLike').innerHTML = `Feels Like<br>${myWeatherData.feelslike}°F`;

}

//send SEEENNDDIT

xhr.send();

}