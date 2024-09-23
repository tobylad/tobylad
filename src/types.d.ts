interface CurrentDateTime {
  time: string
  date: string
}

interface MapCoordinates {
  lat: number
  lon: number
}

interface RetroWeatherCardProps {
  day: string
  weatherId: number
  forecast: string
  low: string
  high: string
}

interface RetroWeatherIconSelector {
  weatherId: number
}