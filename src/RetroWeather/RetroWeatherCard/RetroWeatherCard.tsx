import './retro-weather-card.css'
import { RetroWeatherIconSelector } from '../RetroWeatherIconSelector/RetroWeatherIconSelector'

export const RetroWeatherCard: React.FC<RetroWeatherCardProps> = ({ day, weatherId, forecast, low, high }) => {
  return (
    <div className="card">
      <div className="card-day">{day}</div>
      <div className="card-graphic">
        <div className="graphic-wrapper">
          <RetroWeatherIconSelector weatherId={weatherId} />
        </div>
      </div>
      <div className="card-forecast">{forecast}</div>
      <div className="card-temps">
        <div className="temp-label"><span>Lo</span></div>
        <div className="temp-label"><span>Hi</span></div>
        <div className="temp"><span>{low}</span></div>
        <div className="temp"><span>{high}</span></div>
      </div>
    </div>
  );
};
