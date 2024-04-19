import "./NextDays.css";
import { setNextDaysIcons } from "../../utils/setAssets";
import { toShortDate } from "../../utils/date";

export default function NextDays({ days, setCurrentDay }) {
  setNextDaysIcons(days);

  return (
    <div className="next-days">
      {days?.map((data) => {
        return (
          <div onClick={() => setCurrentDay(data)} className="day" key={data.date_epoch}>
            <h6 className="day-name">{toShortDate(data.date)}</h6>
            <div className="day-icon">
              <img src={data.icon} />
            </div>
            <div className="day-details">
              <h6 className="day-min">{Math.round(data.day.mintemp_c) + "ºc"}</h6>
              <h6 className="day-max">{Math.round(data.day.maxtemp_c) + "ºc"}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}
