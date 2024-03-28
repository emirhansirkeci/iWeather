import "./App.css";
import Marca from "./assets/Marca.png";
import Search from "./components/Search";

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

      <Search />
    </div>
  );
}

export default App;
