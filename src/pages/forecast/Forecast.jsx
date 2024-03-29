import "./forecast.css";
import { useLocation } from "react-router-dom";

import Card from "../../components/Card";
import {
  WeatherDetail,
  availableDetails,
} from "../../components/WeatherDetail";
import ForecastHero from "../../components/ForecastHero";

export default function Forecast() {
  const location = useLocation();

  console.log(location.state);

  return (
    <div className="forecast-wrapper">
      <Card>
        <ForecastHero
          name="Istanbul, TR"
          date="Monday, May 15, 2024"
          value="28ºc"
          valueRange="26ºc / 32ºc"
          status="Few Clouds"
          backgroundIcon="/src/assets/images/rain-night.png"
          weatherIcon="/src/assets/weather-icons/weather-rain-night.svg"
        />
      </Card>

      <Card>
        <div className="weather-details">
          {availableDetails.map((detail) => {
            return (
              <WeatherDetail
                key={detail.key}
                name={detail.name}
                value="26ºc"
                icon={detail.icon}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
}
