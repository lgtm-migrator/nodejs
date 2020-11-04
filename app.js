const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const uinput = process.argv[2];

if (!uinput) {
  return console.log(
    "Please enter a location you would like the forecast for!"
  );
} else {
  geocode(uinput, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(data.location);
      console.log(forecastData);
    });
  });
}
