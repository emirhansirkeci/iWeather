import "./Suggestions.css";

import { useEffect, useMemo, useState } from "react";
import { getSuggestions } from "../../utils/getSuggestions";
import { reverseGeocoding } from "../../services/api/fetchGeo";
import useDebounce from "../../hooks/useDebounce";

export default function Suggestions(props) {
  const { value, sendRequest, showSuggestions, inputRef } = props;
  const [detectedLocation, setDetectedLocation] = useState(false);
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    navigator?.geolocation?.getCurrentPosition(async (res) => {
      const location = await reverseGeocoding(res.coords.latitude, res.coords.longitude);

      if (location.length == 0) return console.log("Location could not be detected automatically.");

      const parsedResult = {
        ...location[0],
        html: location[0].name + ", " + location[0].country,
      };

      setDetectedLocation(parsedResult);
    });
  }, []);

  const suggestions = useMemo(() => {
    if (!debouncedValue) return [];

    return getSuggestions(debouncedValue);
  }, [debouncedValue]);

  const handleSuggestionClick = async (suggestion) => {
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
        <div className="suggestion fade-in" onClick={handleDetectedLocationClick}>
          <p className="text-md">{detectedLocation.html}</p>
        </div>
      ) : null}
      {suggestions.map((suggestion) => {
        return (
          <div
            className="suggestion fade-in"
            key={suggestion.name}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            <p className="text-md">{suggestion.html}</p>
          </div>
        );
      })}
    </div>
  );
}
