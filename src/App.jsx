import "./App.css";
import Marca from "./assets/Marca.png";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";

function App() {
  return (
    <div className="wrapper">
      <div className="logo">
        <img src={Marca} />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
      </Routes>
    </div>
  );
}

export default App;
