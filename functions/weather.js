const request = require("request");

const weather = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Connecting ERROR!! can't access website", undefined);
    } else if (response.body.error) {
      callback(response.body.error.message, undefined);
    } else {
      callback(
        undefined,
        "\n\tCountry name: \t" +
          response.body.location.name +
          "\n\tWeather: \t" +
          response.body.current.condition.text +
          "\n\tTemperature: \t" +
          response.body.current.temp_c+"°C"
      );
    }
  });
};

module.exports = weather;
