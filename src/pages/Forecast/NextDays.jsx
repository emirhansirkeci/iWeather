import "./NextDays.css";
import { setNextDaysIcons } from "../../utils/setAssets";

function Day({ name, icon, min, max }) {
  return (
    <div className="day">
      <h6 className="day-name">{name}</h6>
      <div className="day-icon">
        <img src={icon} />
      </div>
      <div className="day-details">
        <h6 className="day-min">{min}</h6>
        <h6 className="day-max">{max}</h6>
      </div>
    </div>
  );
}

export default function NextDays({ weatherData }) {
  const days = weatherData.forecast.forecastday;
  setNextDaysIcons(days);

  return (
    <div className="next-days">
      {days.map((data) => {
        return (
          <Day
            key={data.date_epoch}
            name={new Date(data.date).toLocaleDateString("en-US", {
              weekday: "short",
            })}
            icon={data.icon}
            min={Math.round(data.day.mintemp_c) + "ºc"}
            max={Math.round(data.day.maxtemp_c) + "ºc"}
          />
        );
      })}
    </div>
  );
}
