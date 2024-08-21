class WeatherAPI{
    constructor(){
        this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
        This.apiKey = "be7aec3fefafb8f42f4e4957ea5814f1";
    }

    getWeatherInfo(cityname){

       const response = await fetch(`${this.baseURL}?q=${cityname}&units=metric&lang=tr&appid=${this.apikey}`)
       const data = await response.json();
       return data;


    }
}