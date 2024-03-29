export function WeatherDetail({ name, value, icon }) {
  return (
    <div className="detail">
      <div className="detail-left">
        <div
          className="detail-icon"
          style={{
            backgroundImage: "url(" + icon + ")",
          }}
        ></div>
        <div className="detail-name">
          <h6>{name}</h6>
        </div>
      </div>
      <div className="detail-value">
        <h5>{value}</h5>
      </div>
    </div>
  );
}

export const availableDetails = [
  {
    key: "thermal-sensation",
    name: "Thermal sensation",
    icon: "/src/assets/phosphor-icons/phosphor-thermometer-light.svg",
  },
  {
    key: "probability-of-rain",
    name: "Probability of rain",
    icon: "/src/assets/phosphor-icons/phosphor-cloud-rain-light.svg",
  },
  {
    key: "wind-speed",
    name: "Wind speed",
    icon: "/src/assets/phosphor-icons/phosphor-wind-light.svg",
  },
  {
    key: "air-humidity",
    name: "Air humidity",
    icon: "/src/assets/phosphor-icons/phosphor-drop-light.svg",
  },
  {
    key: "uv-index",
    name: "UV Index",
    icon: "/src/assets/phosphor-icons/phosphor-sun-dim-light.svg",
  },
];
