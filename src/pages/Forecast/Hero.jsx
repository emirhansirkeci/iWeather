import "./Hero.css";

export default function ForecastHero({ location, currentDay, currentDate }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("${currentDay.backgroundImage}")`,
      }}
    >
      <div className="hero-top">
        <h5>{location}</h5>
        <label className="text-xs">{currentDate}</label>
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
            backgroundImage: `url("${currentDay.weatherIcon}")`,
          }}
        ></div>
      </div>
    </div>
  );
}
