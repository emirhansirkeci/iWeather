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

export function WeatherDetails({ current, today }) {
  return (
    <div className="weather-details">
      <Detail
        key="thermal-sensation"
        name="Thermal sensation"
        icon={phosphorIcons.thermalSensation}
        value={current.feelslike_c + "ºc"}
      />

      <Detail
        key="probability-of-rain"
        name="Probability of rain"
        icon={phosphorIcons.probabilityOfRain}
        value={today.daily_chance_of_rain + "%"}
      />

      <Detail
        key="wind-speed"
        name="Wind speed"
        icon={phosphorIcons.windSpeed}
        value={current.wind_kph + " km/h"}
      />

      <Detail
        key="air-humidity"
        name="Air humidity"
        icon={phosphorIcons.airHumidity}
        value={current.humidity + "%"}
      />

      <Detail key="uv-index" name="Uv index" icon={phosphorIcons.uvIndex} value={current.uv} />
    </div>
  );
}
