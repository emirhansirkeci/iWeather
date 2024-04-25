import "./index.css";

import GeoLocation from "@components/GeoLocation";
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
