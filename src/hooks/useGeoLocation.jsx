import { useState } from "react";
import { reverseGeocoding } from "../services/api/fetchGeo";

export default function useGeoLocation() {
  const [geoLocation, setGeoLocation] = useState(null);
  const [error, setError] = useState();

  if (!navigator || !navigator?.geolocation) return setError("Geolocation not supported.");

  const successCallback = async (position) => {
    const location = await reverseGeocoding(position.coords.latitude, position.coords.longitude);
    if (location.length == 0) return setError("Location not found.");

    const parsedResult = {
      ...location[0],
      html: location[0].name + ", " + location[0].country,
    };

    setGeoLocation(parsedResult);
  };

  const errorCallback = (error) => {
    setError("Something went wrong");
  };

  const getGeoLocation = () => {
    setError();
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then(function (result) {
        console.log(result);
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
          setError("Need your permission to find your location.");
        } else if (result.state === "denied") {
          setError("User denied to share its location.");
        }
      });
    }
  };

  return [geoLocation, getGeoLocation, error];
}
