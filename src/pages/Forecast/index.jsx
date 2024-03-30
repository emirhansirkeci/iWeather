import "./index.css";
import { WeatherDetails } from "./WeatherDetails";
import Card from "../../components/Card";
import ForecastHero from "./Hero";
import NextDays from "./NextDays";

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
        <WeatherDetails weatherData={weatherData} />
      </Card>

      <Card>
        <NextDays weatherData={weatherData} />
      </Card>
    </div>
  );
}
