const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const uinput = process.argv[2];


// Goal: Use both destructuring and property shorthand in weather app
//
// 1. Use destructuring in app.js, forecast.js, and geocode.js
// 2. Use property shorthand in forecast.js and geocode.js
// 3. Test your work and ensure app still works


if (!uinput) {
  return console.log(
    "Please enter a location you would like the forecast for!"
  );
} else {
  geocode(uinput, (error, { latitude, longitude, location } = {}) => {
  geocode(uinput, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}
