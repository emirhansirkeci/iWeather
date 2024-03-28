import { useEffect, useState } from "react";
import { getSuggestions } from "../getSuggestions";
import axios from "axios";

export default function Search() {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");

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

  const showForecast = async (location) => {
    const url =
      "http://api.weatherapi.com/v1/forecast.json?key=5073225d75e942ef880155404242503&q=" +
      location +
      "&days=1&aqi=no&alerts=no";

    axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was a problem with the axios operation:", error);
      });
  };

  return (
    <>
      <div className="search-section">
        <input
          placeholder="Search location"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="locations-wrapper">
        {suggestions.map((suggestion) => {
          return (
            <div
              className="location fade-in"
              key={suggestion.index}
              onClick={() => showForecast(suggestion.found)}
            >
              <p className="text-md">{suggestion.html}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
