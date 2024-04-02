import "./Suggestions.css";

import { useEffect, useState } from "react";
import { getSuggestions } from "../../utils/getSuggestions";
import useDebounce from "../../hooks/useDebounce";
import { reverseGeocoding } from "../../services/api/fetchGeo";

export default function Suggestions(props) {
  const { value, sendRequest, showSuggestions, inputRef } = props;

  const [suggestions, setSuggestions] = useState([]);
  const [detectedLocation, setDetectedLocation] = useState(false);
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    navigator?.geolocation?.getCurrentPosition(async (res) => {
      const location = await reverseGeocoding(
        res.coords.latitude,
        res.coords.longitude
      );

      const parsedResult = {
        ...location[0],
        html: location[0].name + ", " + location[0].country,
      };

      setDetectedLocation(parsedResult);
    });
  }, []);

  useEffect(() => {
    if (debouncedValue) {
      const results = getSuggestions(debouncedValue);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  }, [debouncedValue]);

  const handleSuggestion = async (suggestion) => {
    const { lat, lon, html } = suggestion;
    inputRef.current.value = html;

    sendRequest({
      coords: {
        lat,
        lon,
      },
    });
  };

  const handleDetectedLocationClick = () => {
    const { lat, lon, html } = detectedLocation;
    inputRef.current.value = html;

    sendRequest({
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
          onClick={handleDetectedLocationClick}
        >
          <p className="text-md">{detectedLocation.html}</p>
        </div>
      ) : null}
      {suggestions.map((suggestion, index) => {
        return (
          <div
            className="suggestion fade-in"
            key={index}
            onClick={() => handleSuggestion(suggestion)}
          >
            <p className="text-md">{suggestion.html}</p>
          </div>
        );
      })}
    </div>
  );
}
