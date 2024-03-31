import "./Suggestions.css";

import { useEffect, useState } from "react";
import { getSuggestions } from "../../utils/getSuggestions";

export default function Suggestions({ value, loading, sendRequest, inputRef }) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (value && !loading) {
      const timeout = setTimeout(() => {
        const results = getSuggestions(value).splice(0, 5);

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

  const handleSuggestion = async (location, htmlValue) => {
    inputRef.current.value = htmlValue;
    sendRequest(location);
  };

  return (
    <div className="suggestions">
      {suggestions.map((suggestion, index) => {
        return (
          <div
            className="suggestion fade-in"
            key={index}
            onClick={() => handleSuggestion(suggestion.found, suggestion.html)}
          >
            <p className="text-md">{suggestion.html}</p>
          </div>
        );
      })}
    </div>
  );
}
