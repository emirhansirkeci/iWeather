import { useState } from "react";
import { directGeocoding } from "../services/api/fetchGeo";
import { fetchWeather } from "../services/api/fetchWeather";
import { useNavigate } from "react-router-dom";

export default function useRequest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const sendRequest = async ({ location, coords }) => {
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
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [sendRequest, loading, error];
}
