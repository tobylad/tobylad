class OpenWeather {
  constructor() {}

  private apiKey = process.env.OPEN_WEATHER_API_KEY

  public getWeatherForecastByUsZip = async (zip: string) => {
    const geoApiUrl = `https://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${this.apiKey}`

    try {
      // Get geographical data from user input
      const geoResponse = await fetch(geoApiUrl)

      if (!geoResponse.ok) throw new Error(`Error: ${geoResponse.status}`)

      const geoData = await geoResponse.json()

      // Use resulting data to fetch weather with lat and lon
      const forecastApiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${geoData.lat}&lon=${geoData.lon}&exclude=current,minutely,hourly,alerts&appid=${this.apiKey}`
      const forecastResponse = await fetch(forecastApiUrl)

      if (!forecastResponse.ok) throw new Error(`Error: ${forecastResponse.status}`)

      const forecastData = await forecastResponse.json()
      return forecastData

    } catch (error: any) {
      console.error('Error fetching weather data:', error);
    }
  }
}

const openWeather = new OpenWeather()

export default openWeather
