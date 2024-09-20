import './retro-weather.css'
import { useState, useEffect } from 'react'
import { Card } from './Card/Card'

export const RetroWeather: React.FC = () => {
  const [city, setCity] = useState<string>('')
  const [weatherPageType, setWeatherPageType] = useState<string>('')

  const cards = [
    {
      day: 'THU',
      graphic: 'SUN',
      forecast: 'Partly Cloudy',
      low: '76',
      high: '95'
    },
    {
      day: 'THU',
      graphic: 'SUN',
      forecast: 'Partly Cloudy',
      low: '76',
      high: '95'
    },
    {
      day: 'THU',
      graphic: 'SUN',
      forecast: 'Partly Cloudy',
      low: '76',
      high: '95'
    }
  ]

  useEffect(() => {
    setCity('Chicago Metro')
    setWeatherPageType('Extended Forecast')
  }, [])

  return (
    <div className="retro-wrapper">
      <div className="retro-header">
        
        <div className="retro-header-logo">
          <img src="https://tobyladimages.blob.core.windows.net/images/retro-weather-header-logo.webp" alt="logo" />
        </div>

        <div className="retro-header-weather-stats">
            <div>{ city }</div>
            <div><span className="weather-page-type">{ weatherPageType }</span></div>
        </div>

        <div className="retro-header-datetime">
          <div className="retro-header-time">CURRENT TIME</div>
          <div className="retro-header-date">CURRENT DATE</div>
        </div>

      </div>

      <div className="retro-body">
        { cards && cards.map((card, i) => (
          <Card 
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
