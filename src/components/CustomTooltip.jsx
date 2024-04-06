import "./CustomTooltip.css";

export default function CustomTooltip({ active, payload, label, chart }) {
  if (!active && !payload && !payload.length) return null;

  let value = payload[0]?.value;
  let condition = payload[0]?.payload.condition.trim();
  let format = `${"Temperature: " + value + "°C"}`;

  if (active && payload && payload.length) {
    switch (chart) {
      case "temp":
        format = `${"Temperature: " + value + "°C"}`;
        break;
      case "windSpeed":
        format = `${"Wind Speed: " + value + "km/h"}`;
        break;
      case "chanceOfSnow":
        format = `${"Chance of Snow: " + value + "%"}`;
        break;
      case "chanceOfRain":
        format = `${"Chance of Rain: " + value + "%"}`;
        break;
    }
  }

  return (
    <div className="custom-tooltip">
      <p className="text-sm">{`${label} - ${condition}`}</p>
      <div className="text-md format">{format}</div>
    </div>
  );
}
