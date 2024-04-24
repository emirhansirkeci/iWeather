import GeoLocation from "../../components/GeoLocation";
import "./index.css";

import Search from "./Search";
import WelcomeMessage from "./WelcomeMessage";

export default function Home() {
  return (
    <div className="home">
      <WelcomeMessage />
      <Search />
      <GeoLocation />
    </div>
  );
}
