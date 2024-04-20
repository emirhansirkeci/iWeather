import "./index.css";
import { WeatherDetails } from "./WeatherDetails";
import Card from "../../components/Card";
import ForecastHero from "./Hero";
import NextDays from "./NextDays";

import { useLocation, Navigate } from "react-router-dom";
import Chart from "./Chart";
import useWeatherData from "../../hooks/useWeatherData";

export default function Forecast() {
  const data = useLocation();

  if (data.state === null) {
    return <Navigate to="/" />;
  }

  const weatherData = data.state.weatherData;
  const [location, days, currentDay, setCurrentDay, currentDate] = useWeatherData(weatherData);

  return (
    <div className="forecast-wrapper">
      <Card>
        <ForecastHero location={location} currentDay={currentDay} date={currentDate} />
      </Card>

      <Card>
        <WeatherDetails currentDay={currentDay} />
      </Card>

      <Card>
        <NextDays setCurrentDay={setCurrentDay} days={days} />
      </Card>

      <Card>
        <Chart currentDay={currentDay} />
      </Card>
    </div>
  );
}
