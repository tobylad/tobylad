interface CurrentDateTime {
  time: string
  date: string
}

interface MapCoordinates {
  lat: number
  lon: number
}

interface RetroWeatherCardProps {
  day: string;
  graphic: string;
  forecast: string;
  low: string;
  high: string;
}