import "./GeoLocation.css";
import svg from "../assets/location.svg";
import LoadingIcon from "./LoadingIcon";
import useRequest from "../hooks/useRequest";
import toast from "react-hot-toast";
import { useState } from "react";
import { reverseGeocoding } from "../services/api/fetchGeo";

export default function GeoLocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [sendRequest] = useRequest();

  const successCallback = async (position) => {
    try {
      const location = await reverseGeocoding(position.coords.latitude, position.coords.longitude);

      sendRequest({
        coords: {
          lat: location[0].lat,
          lon: location[0].lon,
        },
      });
    } catch (error) {
      console.error("Reverse geocoding error:", error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const errorCallback = (error) => {
    console.error("Error callback: ", error);
    toast.error("Something went wrong. You may have denied sharing your location.");
    setIsLoading(false);
  };

  const getGeoLocation = async () => {
    toast.dismiss();
    setIsLoading(true);

    try {
      const result = await navigator.permissions.query({ name: "geolocation" });

      if (result.state === "granted" || result.state === "prompt") {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      } else if (result.state === "denied") {
        toast.error(
          "Permission denied to access your location. Please allow site access to your location from the browser settings.",
        );
        setIsLoading(false);
      }
    } catch (e) {
      console.error("geoLocation - Permissions Query Error: ", e);
      toast.error("Something went wrong.");
      setIsLoading(false);
    }
  };

  return (
    <div className="geolocation" onClick={getGeoLocation}>
      <p className="text-md">Find my location</p>
      <div className="geolocation-icon">
        {isLoading ? <LoadingIcon /> : <img src={svg} width="32px" />}
      </div>
    </div>
  );
}
