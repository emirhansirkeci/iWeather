import "./index.css";

import SavedLocations from "@components/SavedLocations";
import GeoLocation from "@components/GeoLocation";
import Search from "./Search";
import WelcomeMessage from "./WelcomeMessage";

export default function Home() {
  return (
    <div className="home">
      <WelcomeMessage />
      <Search />
      <div className="quick-buttons">
        <GeoLocation />
        <SavedLocations />
      </div>
    </div>
  );
}
