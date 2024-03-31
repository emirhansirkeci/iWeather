import "./Search.css";

import { useEffect, useState } from "react";
import { getSuggestions } from "../../utils/getSuggestions";
import { useNavigate } from "react-router-dom";
import { fetchDataAndNavigate } from "../../services/fetchDataAndNavigate";

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

  const handleSuggestionClick = async (location) => {
    fetchDataAndNavigate(location, navigate);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      fetchDataAndNavigate(value, navigate);
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

      <div className="locations">
        {suggestions.map((suggestion, index) => {
          return (
            <div
              className="location fade-in"
              key={index}
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
