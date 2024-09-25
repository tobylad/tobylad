import './retro-weather.css'
import { useState, useEffect } from 'react'
import { RetroWeatherCard } from './RetroWeatherCard/RetroWeatherCard'
import { RetroFooter } from './RetroFooter/RetroFooter'
import { formatDateTime, formatDate } from '../utils'
import openWeather from '../api/openWeather'

export const RetroWeather: React.FC = () => {
  const [location, setLocation] = useState<string>('')
  const [mapCoords, setMapCoords] = useState<MapCoordinates>({ lat: null, lon: null })
  const [weatherPageType, setWeatherPageType] = useState<string>('')
  const [currentDateTime, setCurrentDateTime] = useState<CurrentDateTime>({ time: '', date: '' })
  const [weatherCards, setWeatherCards] = useState<RetroWeatherCardProps[]>([])

  const [tickerMessages, setTickerMessages] = useState<string[]>([])

  // Runs once
  useEffect(() => {
    const configureLocation = async () => {
      const geoData = await openWeather.getCoordinatesFromZip('30316') // DEFAULT TO DEKALB COUNTY

      const lat = geoData.lat
      const lon = geoData.lon
      setLocation(geoData.name)
      setMapCoords({ lat, lon })
    }
    
    configureLocation()
    setWeatherPageType('Extended Forecast')
    setTickerMessages([
      'Welcome to Retro Weather App! Click the location at the top of the screen to pick a new location by zip!',
      'The extended forecast will show general weather information about the following 3 days. The clock shows the time based on the current time zone based the chosen location.',
      'Based off the 90s Weather Channel forecasts.'
    ])

    // Update current time and date on UI every one second
    const intervalId = setInterval(() => {
      const formattedDateTime: CurrentDateTime = formatDateTime()
      setCurrentDateTime({ 
        time: formattedDateTime.time, 
        date: formattedDateTime.date
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  // Runs when mapCoords are changed
  useEffect(() => {
    const setForecast = async () => {
      await setThreeDayForecast()
    }

    if (Object.values(mapCoords).includes(null)) {
      return
    }

    setForecast()
  }, [mapCoords])

  const setThreeDayForecast = async () => {
    const forecastData = await openWeather.getThreeDayWeatherForecast(mapCoords.lat, mapCoords.lon)

    // SET CARDS HERE WITH FORECAST DATA
    const updatedWeatherCards = forecastData?.map((dailyData) => {
      return {
        day: formatDate(new Date(dailyData.dt * 1000)).slice(0, 3),
        weatherId: dailyData.weather[0].id,
        forecast: dailyData.weather[0].main,
        low: Math.round(dailyData.temp.min),
        high: Math.round(dailyData.temp.max)
      }
    })

    setWeatherCards(updatedWeatherCards)
  }

  return (
    <div className="retro-wrapper">
      <div className="retro-header">
        
        <div className="retro-header-logo">
          <img src="https://tobyladimages.blob.core.windows.net/images/retro-weather-header-logo.webp" alt="logo" />
        </div>

        <div className="retro-header-weather-stats">
            <div className="weather-location"><span>{ location }</span></div>
            <div><span className="weather-page-type">{ weatherPageType }</span></div>
        </div>

        <div className="retro-header-datetime">
          <div className="retro-header-time">{currentDateTime.time}</div>
          <div className="retro-header-date">{currentDateTime.date}</div>
        </div>

      </div>

      <div className="retro-body">
        { weatherCards && weatherCards.map((card, i) => (
          <RetroWeatherCard 
            key={`card-${i}`}
            day={card.day}
            weatherId={card.weatherId}
            forecast={card.forecast} 
            low={card.low} 
            high={card.high} 
          />
        ))}
      </div>

        <RetroFooter tickerMessages={ tickerMessages } />
    </div>
  )
}
