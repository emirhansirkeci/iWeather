import "./NextDays.css";
import { setNextDaysIcons } from "../../utils/setAssets";

export default function NextDays({ weatherData }) {
  const days = weatherData.forecast.forecastday;
  setNextDaysIcons(days);
  console.log(days);

  return (
    <div className="next-days">
      {days.map((data, index) => {
        return (
          <div className="day" key={index}>
            <h6 className="day-name">
              {new Date(data.date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </h6>
            <div className="day-icon">
              <img src={data.icon} />
              {/* <img src={data.day.condition.icon} /> */}
            </div>
            <div className="day-details">
              <h6 className="day-min">
                {Math.round(data.day.mintemp_c) + "ºc"}
              </h6>
              <h6 className="day-max">
                {Math.round(data.day.maxtemp_c) + "ºc"}
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}
