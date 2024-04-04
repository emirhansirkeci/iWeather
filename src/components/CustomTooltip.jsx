import "./CustomTooltip.css";

export default function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="text-sm">{`${label}`}</p>
        <div className="temp">
          <label>Temp: </label>
          <label>{`${payload[0].value}°C`}</label>
        </div>
      </div>
    );
  }
  return null;
}
