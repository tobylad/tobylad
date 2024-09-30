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

interface RetroModalContent {
  id: string;
  message: string;
  maxLength?: number;
  buttonText: string;
  // buttonAction: () => void;
  // inputAction: (e: any) => void;
}