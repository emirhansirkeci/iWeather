import "./NextDays.css";
import { setNextDaysIcons } from "../../utils/setAssets";
import { toShortDate } from "../../utils/date";

export default function NextDays({ days }) {
  setNextDaysIcons(days);

  return (
    <div className="next-days">
      {days?.map((data, index) => {
        return (
          <div className="day" key={index}>
            <h6 className="day-name">{toShortDate(data.date)}</h6>
            <div className="day-icon">
              <img src={data.icon} />
            </div>
            <div className="day-details">
              <h6 className="day-min">{data.day.mintemp_c + "ºc"}</h6>
              <h6 className="day-max">{data.day.maxtemp_c + "ºc"}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}
