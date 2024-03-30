import "./forecast.css";
import { WeatherDetail } from "../../components/WeatherDetail";
import Card from "../../components/Card";
import ForecastHero from "../../components/ForecastHero";
import NextDays from "../../components/NextDays";

import { useLocation } from "react-router-dom";

export default function Forecast() {
  const data = useLocation();
  const weatherData = data.state.weatherData;

  return (
    <div className="forecast-wrapper">
      <Card>
        <ForecastHero weatherData={weatherData} />
      </Card>

      <Card>
        <WeatherDetail weatherData={weatherData} />
      </Card>

      <Card>
        <NextDays weatherData={weatherData} />
      </Card>
    </div>
  );
}
