import "./assets/styles/App.css";
import Marca from "./assets/images/Marca.svg";

import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Forecast from "./pages/Forecast";

function App() {
  return (
    <div className="wrapper">
      <Link to="/">
        <div className="logo">
          <img src={Marca} />
        </div>
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
