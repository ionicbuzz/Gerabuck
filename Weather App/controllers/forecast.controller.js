const opencage = require('opencage-api-client');

let city = [];

const forecastWebpage = (req, res) => {
    res.send(`Forecast for ${city}`);
}

const cityToCoor = (req, res) => {
    const city = req.body.city;
    console.log(city);
// note that the library takes care of URI encoding
opencage
  .geocode({ q: city })
  .then((data) => {
    // console.log(JSON.stringify(data));
    if (data.status.code === 200 && data.results.length > 0) {
      const place = data.results[0];
      console.log(place.formatted);
      console.log(place.geometry);
      latitude = place.geometry.lat;
      longitude = place.geometry.lng;
      console.log(latitude);
      console.log(longitude);

      const MeteoURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=precipitation&hourly=temperature_2m,precipitation,wind_speed_10m,wind_direction_10m&forecast_days=1`;

      fetch(MeteoURL)
      .then((OpenMeteoResponse) => {
        if (!OpenMeteoResponse.ok) {
            res.send("Network error. They didn't call back");
        }

        return OpenMeteoResponse.json();
      })
      .then((data) => {
        res.render("forecast", {weatherData: data}); // Send the weather data as a JSON response to the client
      })
      .catch((error) => {
        console.log('Error:', error.message);
        res.status(500).send("Server error aka not a good sign. Please don't try again");
      });
    } else {
      console.log('Status', data.status.message);
      console.log('total_results', data.total_results);
    }
  })
  .catch((error) => {
    // console.log(JSON.stringify(error));
    console.log('Error', error.message);
    // other possible response codes:
    // https://opencagedata.com/api#codes
  });
}

module.exports = { cityToCoor, forecastWebpage };