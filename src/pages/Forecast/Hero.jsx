import "./Hero.css";
import { getImagesBasedByCondition } from "../../utils/setAssets";

export default function ForecastHero({ weatherData }) {
  const { location } = weatherData;
  console.log(weatherData);

  let locationName = location.name + ", " + location.country;

  if (location.name != location.region) {
    locationName =
      location.name + ", " + location.region + " - " + location.country;
  }

  const today = weatherData.forecast.forecastday[0].day;
  const todaysDate = weatherData.forecast.forecastday[0].date;
  const current = weatherData.current;

  const status = current.condition.text;
  const current_c = Math.round(current.temp_c);
  const minTemp_c = Math.round(today.mintemp_c);
  const maxTemp_c = Math.round(today.maxtemp_c);

  const dateEpoch = todaysDate;
  const date = new Date(dateEpoch).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const { backgroundIcon, weatherIcon } = getImagesBasedByCondition(current);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("${backgroundIcon}")`,
      }}
    >
      <div className="hero-top">
        <h5 className="heading-sm">{locationName}</h5>
        <label className="text-xs">{date}</label>
      </div>

      <div className="hero-bottom">
        <div className="hero-bottom-left">
          <h2>{current_c + "ºc"}</h2>
          <h5>{minTemp_c + "ºc / " + maxTemp_c + "ºc"}</h5>
          <label className="text-sm">{status}</label>
        </div>
        <div className="hero-bottom-right">
          <img src={weatherIcon} />
        </div>
      </div>
    </div>
  );
}
