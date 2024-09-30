import './retro-weather.css'
import { useState, useEffect, useRef } from 'react'
import { RetroWeatherCard } from './RetroWeatherCard/RetroWeatherCard'
import { RetroFooter } from './RetroFooter/RetroFooter'
import { formatDateTime, formatDate } from '../utils'
import openWeather from '../api/openWeather'
import { FaSearch } from "react-icons/fa";

export const RetroWeather: React.FC = () => {
  const [location, setLocation] = useState<string>('')
  const [userZip, setUserZip] = useState<string>('')
  const [mapCoords, setMapCoords] = useState<MapCoordinates>({ lat: null, lon: null })
  const [weatherPageType, setWeatherPageType] = useState<string>('')
  const [currentDateTime, setCurrentDateTime] = useState<CurrentDateTime>({ time: '', date: '' })
  const [weatherCards, setWeatherCards] = useState<RetroWeatherCardProps[]>([])
  const [tickerMessages, setTickerMessages] = useState<string[]>([])
  const [zipModalOpen, setZipModalOpen] = useState<boolean>(false)
  const zipInput = useRef(null)

  const configureLocation = async (zip: string) => {
    const geoData = await openWeather.getCoordinatesFromZip(zip)

    const lat = geoData.lat
    const lon = geoData.lon
    setLocation(geoData.name)
    setMapCoords({ lat, lon })
  }

  // Runs once
  useEffect(() => {
    configureLocation('30316') // DEFAULT TO DEKALB COUNTY
    setWeatherPageType('Extended Forecast')
    setTickerMessages([
      'Welcome to Retro Weather App! Click the magnifying glass to choose a location by US zipcode.'
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
    const setForecastData = async () => {
      await setForecast()
    }

    if (Object.values(mapCoords).includes(null)) {
      return
    }

    setForecastData()
  }, [mapCoords])

  // Runs when zipModalOpen state changes
  useEffect(() => {
    if (!zipModalOpen) return
    zipInput.current.focus()
  }, [zipModalOpen])

  const setForecast = async () => {
    const forecastData = await openWeather.getFourDayWeatherForecast(mapCoords.lat, mapCoords.lon)

    const todaysForecast = forecastData[0]
    const nextThreeDaysForecast = forecastData.slice(1, 4)
    
    // ADD TODAY'S FORECAST SUMMARY TO TICKER
    setTickerMessages([...tickerMessages, `Today in ${location}: ${todaysForecast.summary}`])

    // SET CARDS HERE WITH FORECAST DATA
    const updatedWeatherCards = nextThreeDaysForecast?.map((dailyData) => {
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

  const openZipCodeModal = () => {
    setZipModalOpen(true)
  }

  const searchByZip = () => {
    if (userZip.length < 5) return


    configureLocation(userZip) // TODO: Error handling
    setZipModalOpen(false)
  }

  const handleZipInput = (event: any) => {
    setUserZip(event.target.value)
  }

  return (
    <>
      <div className={`retro-wrapper ${ zipModalOpen ? 'retro-wrapper-overlay' : '' }`}>
        <div className="retro-header">
          
          <div className="retro-header-logo">
            <img src="https://tobyladimages.blob.core.windows.net/images/retro-weather-header-logo.webp" alt="logo" />
          </div>

          <div className="retro-header-weather-stats">
              <div className="weather-location">
                <span>{ location }</span>
                <button className="search-by-zip" onClick={() => openZipCodeModal()}>
                  <FaSearch />
                </button>
              </div>
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

      { zipModalOpen && 
        <div className="retro-modal">
          <div className="retro-modal-message">Enter a 5-digit US zipcode.</div>
          <input ref={zipInput} onChange={(e) => handleZipInput(e)} className="retro-modal-input" id="zipModal" type="tel" maxLength={5} />
          <button className="retro-modal-submit" onClick={() => searchByZip()}>Get { weatherPageType }</button>
        </div>
      }
    </>
  )
}
