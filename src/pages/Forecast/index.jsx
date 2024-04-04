import "./index.css";
import { WeatherDetails } from "./WeatherDetails";
import Card from "../../components/Card";
import ForecastHero from "./Hero";
import NextDays from "./NextDays";

import { useLocation } from "react-router-dom";
import { useState } from "react";
import { toLongDate } from "../../utils/date";
import Chart from "./Chart";

export default function Forecast() {
  const data = useLocation();
  const weatherData = data.state.weatherData;

  const formattedDate = toLongDate(weatherData.forecast.forecastday[0].date);

  const [day, setDay] = useState(weatherData.forecast.forecastday[0]);
  const [days, setDays] = useState(weatherData.forecast.forecastday);
  const [today, setToday] = useState(weatherData.forecast.forecastday[0].day);
  const [date, setDate] = useState(formattedDate);
  const [current, setCurrent] = useState(weatherData.current);
  const [location, setLocation] = useState(weatherData.location);

  return (
    <div className="forecast-wrapper">
      <Card>
        <ForecastHero
          weatherData={weatherData}
          location={location}
          today={today}
          date={date}
          current={current}
        />
      </Card>

      <Card>
        <WeatherDetails current={current} today={today} weatherData={weatherData} />
      </Card>

      <Card>
        <NextDays setDay={setDay} days={days} weatherData={weatherData} />
      </Card>

      <Card>
        <Chart day={day} />
      </Card>
    </div>
  );
}
