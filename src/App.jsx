import "./App.css";
import Marca from "./assets/Marca.png";

function App() {
  return (
    <div className="wrapper">
      <div className="logo">
        <img src={Marca} />
      </div>

      <div className="welcome-message">
        <h4>
          Welcome to <label>TypeWeather</label>
        </h4>
        <p className="text-sm">Choose a location to see the weather forecast</p>
      </div>

      <div className="search-section">
        <input placeholder="Search location" />
      </div>

      <div className="locations-wrapper">
        <div className="location">
          <p className="text-md">Istanbul, IST - Turkey</p>
        </div>

        <div className="location">
          <p className="text-md">Istanbul - Turkey</p>
        </div>

        <div className="location">
          <p className="text-md">Ankara - Turkey</p>
        </div>
      </div>
    </div>
  );
}

export default App;
