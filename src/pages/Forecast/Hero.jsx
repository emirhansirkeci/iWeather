import "./Hero.css";
import { getImagesBasedByCondition } from "../../utils/setAssets";

export default function ForecastHero({ current, location, today, date }) {
  const { backgroundIcon, weatherIcon } = getImagesBasedByCondition(current);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("${backgroundIcon}")`,
      }}
    >
      <div className="hero-top">
        <h5 className="heading-sm">
          {location.name + ", " + location.country}
        </h5>
        <label className="text-xs">{date}</label>
      </div>

      <div className="hero-bottom">
        <div className="hero-bottom-left">
          <h2>{current.temp_c + "ºc"}</h2>
          <h5>{today.mintemp_c + "ºc / " + today.maxtemp_c + "ºc"}</h5>
          <label className="text-sm">{current.condition.text}</label>
        </div>
        <div className="hero-bottom-right">
          <img src={weatherIcon} />
        </div>
      </div>
    </div>
  );
}
