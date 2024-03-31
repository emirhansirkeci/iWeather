import "./index.css";
import Input from "./Input";
import Suggestions from "./Suggestions";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWeather } from "../../services/api/fetchWeather";

export default function Search() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const sendRequest = async (location) => {
    setLoading(true);

    try {
      const data = await fetchWeather(location);
      navigate("/forecast", {
        state: {
          searchedQuery: location,
          weatherData: data,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.target.blur();
      sendRequest(value);
    }
  };

  return (
    <>
      <Input
        loading={loading}
        setValue={setValue}
        handleKeyDown={handleKeyDown}
        inputRef={inputRef}
      />

      <Suggestions
        loading={loading}
        value={value}
        sendRequest={sendRequest}
        inputRef={inputRef}
      />
    </>
  );
}
