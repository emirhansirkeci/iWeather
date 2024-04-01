import "./Suggestions.css";

import { useEffect, useState } from "react";
import { getSuggestions } from "../../utils/getSuggestions";
import useDebounce from "../../hooks/useDebounce";

export default function Suggestions({
  value,
  sendRequest,
  inputRef,
  detectedLocation,
  showSuggestions,
}) {
  const [suggestions, setSuggestions] = useState([]);
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    if (debouncedValue) {
      const results = getSuggestions(debouncedValue);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  }, [debouncedValue]);

  const handleSuggestion = async (location, htmlValue) => {
    inputRef.current.value = htmlValue;
    sendRequest({ location });
  };

  const handleDetectedLocationClick = () => {
    const { lat, lon, name, country, htmlValue } = detectedLocation;
    inputRef.current.value = htmlValue;
    sendRequest({
      location: `${name}, ${country}`,
      coords: {
        lat,
        lon,
      },
    });
  };

  if (!showSuggestions) return null;

  return (
    <div className="suggestions">
      {detectedLocation ? (
        <div
          className="suggestion fade-in"
          onClick={() => handleDetectedLocationClick()}
        >
          <p className="text-md">{detectedLocation.htmlValue}</p>
        </div>
      ) : null}
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
