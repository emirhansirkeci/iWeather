import "./Hero.css";
import { getAssets } from "../../utils/setAssets";
import { useEffect, useState } from "react";

export default function ForecastHero({ location, currentDay, date }) {
  const [background, setBackground] = useState(getAssets(currentDay.day).backgroundImage);
  const [icon, setIcon] = useState(getAssets(currentDay.day).weatherIcon);

  useEffect(() => {
    setBackground(getAssets(currentDay.day).backgroundImage);
    setIcon(getAssets(currentDay.day).weatherIcon);
  }, [currentDay]);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("${background}")`,
      }}
    >
      <div className="hero-top">
        <h5>{location}</h5>
        <label className="text-xs">{date}</label>
      </div>

      <div className="hero-bottom">
        <div className="hero-bottom-left">
          <h2>{Math.round(currentDay.day.avgtemp_c) + "ºc"}</h2>
          <h5>
            {Math.round(currentDay.day.mintemp_c) +
              "ºc / " +
              Math.round(currentDay.day.maxtemp_c) +
              "ºc"}
          </h5>
          <label className="text-sm">{currentDay.day.condition.text}</label>
        </div>
        <div
          className="hero-bottom-right"
          style={{
            backgroundImage: `url("${icon}")`,
          }}
        ></div>
      </div>
    </div>
  );
}
