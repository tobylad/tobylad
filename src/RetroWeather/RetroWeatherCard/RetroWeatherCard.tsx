import './retro-weather-card.css'
import { WiDaySunny } from 'weather-icons-react';

export const RetroWeatherCard: React.FC<RetroWeatherCardProps> = ({ day, graphic, forecast, low, high }) => {
  return (
    <div className="card">
      <div className="card-day">{day}</div>
      <div className="card-graphic">
        <div className="graphic-wrapper">
          {/* TODO: Map out potential icons based on weather API */}
          <WiDaySunny className="glowing-sun" size={160} color='#FF7518' />
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
