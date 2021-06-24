const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=" +
    process.env.WEATHERSTACK_API_KEY +
    "&query=" +
    lat +
    "," +
    long;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const { temperature, feelslike, humidity } = body.current;
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          `. It is currently ${temperature} degrees but it feels like ${feelslike} out. The humidity is ${humidity}%.`
      );
    }
  });
};

module.exports = forecast;
