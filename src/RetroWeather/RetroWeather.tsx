import './retro-weather.css'
import { useState, useEffect } from 'react'
import { RetroWeatherCard } from './RetroWeatherCard/RetroWeatherCard'
import { getFutureDayString } from '../utils'
import openWeather from '../api/openWeather'

interface RetroWeatherDateTime {
  time: string;
  date: string;
  nextThreeDaysOfWeek: RetroWeatherDaysOfWeek;
}

interface RetroWeatherDaysOfWeek {
  tomorrow: string;
  dayAfterTomorrow: string;
  threeDaysFromNow: string;
}

export const RetroWeather: React.FC = () => {
  const [city, setCity] = useState<string>('')
  const [weatherPageType, setWeatherPageType] = useState<string>('')
  const [currentDateTime, setCurrentDateTime] = useState<RetroWeatherDateTime>({
    time: '',
    date: '',
    nextThreeDaysOfWeek: {
      tomorrow: '',
      dayAfterTomorrow: '',
      threeDaysFromNow: ''
    }
  })

  useEffect(() => {
    setCity('Atlanta Metro')
    setWeatherPageType('Extended Forecast')

    const intervalId = setInterval(() => {
      const formattedDateTime: RetroWeatherDateTime = formatDateTime()
      setCurrentDateTime({ 
        time: formattedDateTime.time, 
        date: formattedDateTime.date,
        nextThreeDaysOfWeek: {
          tomorrow: formattedDateTime.nextThreeDaysOfWeek.tomorrow,
          dayAfterTomorrow: formattedDateTime.nextThreeDaysOfWeek.dayAfterTomorrow,
          threeDaysFromNow: formattedDateTime.nextThreeDaysOfWeek.threeDaysFromNow
        }
      })
    }, 1000)



    return () => clearInterval(intervalId)
  }, [])

  const formatDateTime = (): RetroWeatherDateTime => {
    const today = new Date()
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    
    // Format date for header
    const currentDayOfWeek = days[today.getDay()]
    const month = months[today.getMonth()]
    const dayOfMonth = today.getDate()
    const year = today.getFullYear()

    const formattedDate = `${currentDayOfWeek} ${month} ${dayOfMonth} ${year}`

    // Format Time - "HH : MM : SS AM/PM"
    const hours = today.getHours()
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12
    const period = hours >= 12 ? "PM" : "AM"
    const formattedMinutes = today.getMinutes().toString().padStart(2, "0")
    const formattedSeconds = today.getSeconds().toString().padStart(2, "0")

    const formattedTime = `${formattedHours} : ${formattedMinutes} : ${formattedSeconds} ${period}`

    // Set the next three days for the weather cards' day of week display
    const nextThreeDaysOfWeek: RetroWeatherDaysOfWeek = {
      tomorrow: getFutureDayString({ currentDayOfWeek, days, numberOfDaysAhead: 1 }),
      dayAfterTomorrow: getFutureDayString({ currentDayOfWeek, days, numberOfDaysAhead: 2 }),
      threeDaysFromNow: getFutureDayString({ currentDayOfWeek, days, numberOfDaysAhead: 3 })
    }

    const updatedDateTime = {
      date: formattedDate,
      time: formattedTime,
      nextThreeDaysOfWeek
    }

    return updatedDateTime
  }

  const cards = [
    {
      day: currentDateTime.nextThreeDaysOfWeek.tomorrow,
      graphic: 'SUN',
      forecast: 'Partly Cloudy',
      low: '76',
      high: '95'
    },
    {
      day: currentDateTime.nextThreeDaysOfWeek.dayAfterTomorrow,
      graphic: 'SUN',
      forecast: 'Partly Cloudy',
      low: '76',
      high: '95'
    },
    {
      day: currentDateTime.nextThreeDaysOfWeek.threeDaysFromNow,
      graphic: 'SUN',
      forecast: 'Partly Cloudy',
      low: '76',
      high: '95'
    }
  ]

  const getWeather = async () => {
    console.log('getting some weather now')
    const data = await openWeather.getWeatherForecastByUsZip('30316')
    console.log(data)
  }

  return (
    <div className="retro-wrapper">
      <div className="retro-header">
        
        <div className="retro-header-logo">
          <img src="https://tobyladimages.blob.core.windows.net/images/retro-weather-header-logo.webp" alt="logo" />
        </div>

        <div className="retro-header-weather-stats">
            <div className="weather-location" onClick={() => getWeather()}><span>{ city }</span></div>
            <div><span className="weather-page-type">{ weatherPageType }</span></div>
        </div>

        <div className="retro-header-datetime">
          <div className="retro-header-time">{currentDateTime.time}</div>
          <div className="retro-header-date">{currentDateTime.date}</div>
        </div>

      </div>

      <div className="retro-body">
        { cards && cards.map((card, i) => (
          <RetroWeatherCard 
            key={`card-${i}`}
            day={card.day}
            graphic={card.graphic} 
            forecast={card.forecast} 
            low={card.low} 
            high={card.high} 
          />
        ))}
      </div>
    </div>
  )
}
