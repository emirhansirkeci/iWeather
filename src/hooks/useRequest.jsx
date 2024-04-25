import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { directGeocoding } from "@services/api/fetchGeo";
import { fetchWeather } from "@services/api/fetchWeather";

export default function useRequest() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const sendRequest = async ({ location, coords }) => {
    toast.dismiss();
    setLoading(true);

    try {
      if (!coords) {
        const geoCode = await directGeocoding(location.trim().split(" ").join(","));

        coords = {
          lat: geoCode[0].lat,
          lon: geoCode[0].lon,
        };
      }
      const weatherData = await fetchWeather(coords);
      navigate("/forecast", {
        state: { weatherData },
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [sendRequest, loading];
}
