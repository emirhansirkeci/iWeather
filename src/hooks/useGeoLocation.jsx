import { useState } from "react";
import { reverseGeocoding } from "../services/api/fetchGeo";

export default function useGeoLocation() {
  const [geoLocation, setGeoLocation] = useState(null);
  const [error, setError] = useState({});

  if (!navigator || !navigator?.geolocation)
    return setError({ code: 4, message: "Geolocation not supported." });

  const successCallback = async (position) => {
    const location = await reverseGeocoding(position.coords.latitude, position.coords.longitude);
    if (location.length == 0) return setError({ code: 5, message: "Location not found." });

    setGeoLocation(location[0].name + ", " + location[0].country);
  };

  const errorCallback = (error) => {
    setError(error);
  };

  const getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  return [geoLocation, getGeoLocation, error];
}
