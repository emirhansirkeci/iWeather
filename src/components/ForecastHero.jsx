export default function ForecastHero({
  name,
  date,
  value,
  valueRange,
  status,
  backgroundIcon,
  weatherIcon,
}) {
  return (
    <div
      className="forecast-hero"
      style={{
        backgroundImage: "url(" + backgroundIcon + ")",
      }}
    >
      <div className="forecast-hero-top">
        <h5 className="heading-sm">{name}</h5>
        <label className="text-xs">{date}</label>
      </div>

      <div className="forecast-hero-bottom">
        <div className="forecast-bottom-left">
          <h2>{value}</h2>
          <h5>{valueRange}</h5>
          <label className="text-sm">{status}</label>
        </div>
        <div
          className="forecast-bottom-right"
          style={{
            backgroundImage: "url(" + weatherIcon + ")",
          }}
        ></div>
      </div>
    </div>
  );
}
