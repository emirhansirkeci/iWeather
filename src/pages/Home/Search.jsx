import "./Search.css";

import { useEffect, useState } from "react";
import { getSuggestions } from "../../utils/getSuggestions";
import { useNavigate } from "react-router-dom";
import loadingIcon from "../../assets/images/loading.svg";
import { fetchWeather } from "../../services/api/fetchWeather";

export default function Search() {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (value && !loading) {
      const timeout = setTimeout(() => {
        const results = getSuggestions(value).splice(0, 5);
        console.log(results);

        if (results.length > 0) {
          setSuggestions(results);
        } else {
          setSuggestions([]);
        }
      }, 500);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      setSuggestions([]);
    }
  }, [value]);

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

  const handleSuggestionClick = async (location, htmlValue) => {
    sendRequest(location);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      sendRequest(value);
    }
  };

  return (
    <>
      <div className="search-section">
        <input
          placeholder="Search location"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {loading ? <img src={loadingIcon} /> : <></>}
      </div>

      <div className="locations">
        {suggestions.map((suggestion, index) => {
          return (
            <div
              className="location fade-in"
              key={index}
              onClick={() =>
                handleSuggestionClick(suggestion.found, suggestion.html)
              }
            >
              <p className="text-md">{suggestion.html}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
