import "./WeatherDetails.css";
import { phosphorIcons } from "../../utils/availableAssets";

function Detail({ name, icon, value }) {
  return (
    <div className="detail">
      <div className="detail-left">
        <div className="detail-icon">
          <img src={icon} />
        </div>
        <div className="detail-name">
          <h6>{name}</h6>
        </div>
      </div>
      <div className="detail-value">
        <h5>{value}</h5>
      </div>
    </div>
  );
}

export function WeatherDetails({ weatherData }) {
  const current = weatherData.current;
  const thermalSensation = current.feelslike_c + "ºc";
  const probabilityOfRain =
    weatherData.forecast.forecastday[0].day.daily_chance_of_rain + "%";
  const windSpeed = current.wind_kph + " km/h";
  const airHumidity = current.humidity + "%";
  const uvIndex = current.uv;

  return (
    <div className="weather-details">
      <Detail
        key="thermal-sensation"
        name="Thermal sensation"
        icon={phosphorIcons.thermalSensation}
        value={thermalSensation}
      />

      <Detail
        key="probability-of-rain"
        name="Probability of rain"
        icon={phosphorIcons.probabilityOfRain}
        value={probabilityOfRain}
      />

      <Detail
        key="wind-speed"
        name="Wind speed"
        icon={phosphorIcons.windSpeed}
        value={windSpeed}
      />

      <Detail
        key="air-humidity"
        name="Air humidity"
        icon={phosphorIcons.airHumidity}
        value={airHumidity}
      />

      <Detail
        key="uv-index"
        name="Uv index"
        icon={phosphorIcons.uvIndex}
        value={uvIndex}
      />
    </div>
  );
}
