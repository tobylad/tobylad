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
}

interface PortfolioDetails {
  title: string
  url: string;
  xpMessage: string;
  projectList: PortfolioProjectDetailsList[];
}

interface PortfolioDetailsProjectList {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}