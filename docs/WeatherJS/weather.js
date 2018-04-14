class Weather {
  constructor(city, state) {
    this.apiKey = "cfc768dd14293e48";
    this.city = city;
    this.state = state;
  }

  // feath
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // chenge weather loc

  chengeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}