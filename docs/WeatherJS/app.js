// init
const ul = new UI();
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);

document.addEventListener("DOMContentLoaded", getWeather);

document.getElementById("w-chenge-btn").addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.chengeLocation(city, state);
  storage.setLocationData(city, state)
  getWeather();
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ul.paint(results);
    })
    .catch(err => console.log(err));
}
