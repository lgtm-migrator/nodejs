const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=c39ceffe6be9b65a901364cbe6d84925&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to connect to weather service!", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions.toString() +
          ", It is currently " +
          body.current.temperature.toString() +
          " degrees out. It feels like " +
          body.current.feelslike.toString() +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
