import { useState } from "react";
import { reverseGeocoding } from "../services/api/fetchGeo";
import toast from "react-hot-toast";

export default function useGeoLocation() {
  const [geoLocation, setGeoLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const successCallback = async (position) => {
    try {
      const location = await reverseGeocoding(position.coords.latitude, position.coords.longitude);

      const parsedResult = {
        ...location[0],
        html: location[0].name + ", " + location[0].country,
      };

      setGeoLocation(parsedResult);
    } catch (error) {
      console.error("Reverse geocoding error:", error);
      toast.error(error.message);
    }
  };

  const errorCallback = (error) => {
    console.error("Error callback: ", error);
    toast.error("Something went wrong. You may have denied sharing your location.");
  };

  const getGeoLocation = () => {
    setLoading(true);
    toast.dismiss();
    if (!navigator || !navigator?.geolocation) return toast.error("Geolocation is not supported.");

    navigator.permissions.query({ name: "geolocation" }).then(function (result) {
      if (result.state === "granted") {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      } else if (result.state === "prompt") {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        toast.error("Permission needed to find your location forecast.");
      } else if (result.state === "denied") {
        toast.error("User denied sharing location.");
      }
    });
    setLoading(false);
  };

  return [geoLocation, getGeoLocation, loading];
}
