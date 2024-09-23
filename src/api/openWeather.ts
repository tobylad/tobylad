class OpenWeather {
  constructor (){}


  public zip = ''
  private apiKey = process.env.OPEN_WEATHER_API_KEY
  
  public getCoordinatesFromZip = async (zip: string): Promise<any> => {
    this.zip = zip
    const apiUrl = `https://api.openweathermap.org/geo/1.0/zip?zip=${this.zip},US&appid=${this.apiKey}`
    
    try {
      const res = await fetch(apiUrl)
      if (!res.ok) throw new Error(`Error: ${res.status}`)
        const data = await res.json()
      return data
      
    } catch (error: any) {
      console.error('Error fetching coordinates data:', error);
    }
  }
  
  public getThreeDayWeatherForecast = async (lat: number, lon: number) => {
    try {
      const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${this.apiKey}&units=imperial`
      const res = await fetch(apiUrl)
      
      if (!res.ok) throw new Error(`Error: ${res.status}`)
        
        const forecastData = await res.json()
        
        // Return the next three days
        return forecastData.daily.slice(1, 4)
        
      } catch (error: any) {
        console.error('Error fetching weather data:', error);
      }
    }
}

const openWeather = new OpenWeather()

export default openWeather
