import { useEffect, useState } from "react";
import { toLongDate } from "@utils/date";
import { addWeatherAssets } from "@utils/addWeatherAssets";

export default function useWeatherData(weatherData) {
  const [currentDay, setCurrentDay] = useState(weatherData.forecast.forecastday[0]);
  const [currentDate, setCurrentDate] = useState();

  const location = weatherData.location.name + ", " + weatherData.location.country;
  const days = weatherData.forecast.forecastday;
  const coords = {
    lat: weatherData.location.lat,
    lon: weatherData.location.lon,
  };

  // Add relevant icons for each day in weatherData
  addWeatherAssets(weatherData);

  useEffect(() => {
    setCurrentDate(toLongDate(currentDay.date));
  }, [currentDay]);

  return [location, days, currentDay, setCurrentDay, currentDate, coords];
}
