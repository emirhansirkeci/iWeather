import "./index.css";
import Input from "./Input";
import Suggestions from "./Suggestions";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWeather } from "../../services/api/fetchWeather";
import { directGeocoding } from "../../services/api/fetchGeo";
import toast from "react-hot-toast";

export default function Search() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
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
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Input
        setValue={setValue}
        sendRequest={sendRequest}
        setShowSuggestions={setShowSuggestions}
        loading={loading}
        inputRef={inputRef}
      />

      <Suggestions
        setValue={setValue}
        sendRequest={sendRequest}
        value={value}
        loading={loading}
        inputRef={inputRef}
        showSuggestions={showSuggestions}
      />
    </>
  );
}
