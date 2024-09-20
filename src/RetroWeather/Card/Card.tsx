import './card.css'

interface CardProps {
  day: string;
  graphic: string;
  forecast: string;
  low: string;
  high: string;
}

export const Card: React.FC<CardProps> = ({ day, graphic, forecast, low, high }) => {
  return (
    <div className="card">
      <div className="card-day">{day}</div>
      <div className="card-graphic">
        <img src={graphic} alt={`${day} forecast graphic`} />
      </div>
      <div className="card-forecast">{forecast}</div>
      <div className="card-temps">
        <span className="low">Low: {low}°</span>
        <span className="high">High: {high}°</span>
      </div>
    </div>
  );
};
