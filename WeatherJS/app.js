// init
const weather = new Weather("Boston", "MA");
const ul = new UI();

document.addEventListener("DOMContentLoaded", getWeather);
//weather.chengeLocation('Miami', 'FL');

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ul.paint(results);
    })
    .catch(err => console.log(err));
}
