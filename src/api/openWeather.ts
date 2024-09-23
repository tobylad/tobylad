class OpenWeather {
  constructor (){
  }

  public zip = ''
  public altApiKey = ''
  private apiKey = process.env.OPEN_WEATHER_API_KEY

  public init = async (): Promise<void> => {
    const keys = await this.fetchKeys()
    this.altApiKey = keys.OPEN_WEATHER_API_KEY
  }
  
  public getCoordinatesFromZip = async (zip: string): Promise<any> => {
    this.zip = zip
    const apiUrl = `https://api.openweathermap.org/geo/1.0/zip?zip=${this.zip},US&appid=${this.apiKey || this.altApiKey}`
    
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
      const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${this.apiKey || this.altApiKey}&units=imperial`
      const res = await fetch(apiUrl)
      
      if (!res.ok) throw new Error(`Error: ${res.status}`)
        
        const forecastData = await res.json()
        
        // Return the next three days
        return forecastData.daily.slice(1, 4)
        
      } catch (error: any) {
        console.error('Error fetching weather data:', error);
      }
    }
    
    public fetchKeys = async () => {
      const res = await fetch('https://tobyladpublickeys.azurewebsites.net/api/getKeys?code=Rham9K2_pxopbwqPJ5soIBT-8_7tzCIiwt_n5KbgyayUAzFuvoH4IQ%3D%3D')
      const keysData = await res.json()
      
      return keysData
    }
}

const openWeather = new OpenWeather()

export default openWeather
