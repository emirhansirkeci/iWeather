import { useEffect, useState } from "react";
import { getSuggestions } from "../getSuggestions";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Search() {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (value) {
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

  const navigateWithLocation = async (location) => {
    // [TODO]: Navigate if valid location provided

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5&aqi=no&alerts=no`;

    axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        navigate("/forecast", {
          state: {
            searchedQuery: location,
            weatherData: response.data,
          },
        });

        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was a problem with the axios operation:", error);
      });
  };

  const handleSuggestionClick = async (location) => {
    navigateWithLocation(location);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigateWithLocation(value);
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
      </div>

      <div className="locations-wrapper">
        {suggestions.map((suggestion) => {
          return (
            <div
              className="location fade-in"
              key={suggestion.index}
              onClick={() => handleSuggestionClick(suggestion.found)}
            >
              <p className="text-md">{suggestion.html}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
