import "./index.css";
import Input from "./Input";
import Suggestions from "./Suggestions";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWeather } from "../../services/api/fetchWeather";
import { turkishToEnglish } from "../../utils/turkishToEnglish";

export default function Search() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const sendRequest = async () => {
    setLoading(true);

    const convertedLocation = turkishToEnglish(value);

    try {
      const data = await fetchWeather(convertedLocation);
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
      />

      <Suggestions
        loading={loading}
        value={value}
        setValue={setValue}
        sendRequest={sendRequest}
        inputRef={inputRef}
      />
    </>
  );
}
