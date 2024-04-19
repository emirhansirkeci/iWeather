import "./index.css";
import { WeatherDetails } from "./WeatherDetails";
import Card from "../../components/Card";
import ForecastHero from "./Hero";
import NextDays from "./NextDays";

import { useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toLongDate } from "../../utils/date";
import Chart from "./Chart";

export default function Forecast() {
  const data = useLocation();

  if (data.state === null) {
    return <Navigate to="/" />;
  }

  const weatherData = data.state.weatherData;
  const location = weatherData.location.name + ", " + weatherData.location.country;
  const days = weatherData.forecast.forecastday;

  const [currentDay, setCurrentDay] = useState(weatherData.forecast.forecastday[0]);
  const [date, setDate] = useState();

  useEffect(() => {
    setDate(toLongDate(currentDay.date));
  }, [currentDay]);

  return (
    <div className="forecast-wrapper">
      <Card>
        <ForecastHero location={location} currentDay={currentDay} date={date} />
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
