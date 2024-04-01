import "./index.css";
import Input from "./Input";
import Suggestions from "./Suggestions";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWeather } from "../../services/api/fetchWeather";
import { turkishToEnglish } from "../../utils/turkishToEnglish";
import { directGeocoding, reverseGeocoding } from "../../services/api/fetchGeo";

export default function Search() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [detectedLocation, setDetectedLocation] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (res) => {
      const location = await reverseGeocoding(
        res.coords.latitude,
        res.coords.longitude
      );

      const parsedResult = {
        ...location[0],
        htmlValue: location[0].name + ", " + location[0].country,
      };

      setDetectedLocation(parsedResult);
    });
  }, []);

  useEffect(() => {
    const handleWindowClick = (event) => {
      if (inputRef.current && inputRef.current.contains(event.target)) {
        setShowSuggestions(true);
      } else {
        setShowSuggestions(false);
      }
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [inputRef]);

  const sendRequest = async ({ location, coords }) => {
    setLoading(true);

    try {
      let coordinates;

      if (!coords) {
        const geoCode = await directGeocoding(location);
        coordinates = geoCode[0].lat + "," + geoCode[0].lon;
      } else {
        coordinates = coords.lat + "," + coords.lon;
      }
      console.log({
        coordinates,
      });
      const data = await fetchWeather(coordinates);
      navigate("/forecast", {
        state: {
          searchedQuery: value,
          weatherData: data,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Input
        loading={loading}
        value={value}
        setValue={setValue}
        sendRequest={sendRequest}
        inputRef={inputRef}
        setShowSuggestions={setShowSuggestions}
      />

      <Suggestions
        detectedLocation={detectedLocation}
        loading={loading}
        value={value}
        setValue={setValue}
        sendRequest={sendRequest}
        inputRef={inputRef}
        showSuggestions={showSuggestions}
      />
    </>
  );
}
