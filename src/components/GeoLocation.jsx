import { useEffect } from "react";
import svg from "../assets/location.svg";
import useGeoLocation from "../hooks/useGeoLocation";
import useRequest from "../hooks/useRequest";
import "./GeoLocation.css";
import toast from "react-hot-toast";
import LoadingIcon from "./LoadingIcon";

export default function GeoLocation() {
  const [geoLocation, getGeoLocation, isGeoError] = useGeoLocation();
  const [sendRequest, loading, isReqError] = useRequest();

  const handleGeoLocation = () => {
    getGeoLocation();
  };

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

  useEffect(() => {
    if (isReqError) toast.error("Something went wrong");
  }, [isReqError]);

  useEffect(() => {
    if (isGeoError) toast.error(isGeoError);
  }, [isGeoError]);

  return (
    <div className="geolocation" onClick={handleGeoLocation}>
      <p className="text-md">Find my location</p>
      <div className="geolocation-icon">
        {loading ? <LoadingIcon /> : <img src={svg} width="32px" />}
      </div>
    </div>
  );
}
