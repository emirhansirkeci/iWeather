import "./WelcomeMessage.css";

export default function WelcomeMessage() {
  return (
    <div className="welcome-message">
      <h4>
        Welcome to <label>iWeather</label>
      </h4>
      <p className="text-sm">Choose a location to see the weather forecast</p>
    </div>
  );
}
