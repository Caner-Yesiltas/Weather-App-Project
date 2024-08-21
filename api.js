class WeatherAPI {
    constructor() {
      this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
      this.apiKey = "be7aec3fefafb8f42f4e4957ea5814f1";
    }
  
    async getWeatherInfo(city) {
      const response = await fetch(`${this.baseUrl}?q=${city}&units=metric&lang=tr&appid=${this.apiKey}`);
      const data = await response.json();
      return data;
    }
  }