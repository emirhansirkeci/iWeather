import "./GeoLocation.css";
import svg from "../assets/location.svg";
import { useEffect } from "react";
import useGeoLocation from "../hooks/useGeoLocation";
import useRequest from "../hooks/useRequest";
import LoadingIcon from "./LoadingIcon";

export default function GeoLocation() {
  const [geoLocation, getGeoLocation, geoLoading] = useGeoLocation();
  const [sendRequest, reqLoading] = useRequest();

  useEffect(() => {
    if (geoLocation) {
      const coords = {
        lat: geoLocation.lat,
        lon: geoLocation.lon,
      };

      sendRequest({
        coords,
      });
    }
  }, [geoLocation]);

  return (
    <div className="geolocation" onClick={getGeoLocation}>
      <p className="text-md">Find my location</p>
      <div className="geolocation-icon">
        {reqLoading || geoLoading ? <LoadingIcon /> : <img src={svg} width="32px" />}
      </div>
    </div>
  );
}
