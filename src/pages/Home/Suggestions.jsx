import "./Suggestions.css";

import { useEffect, useMemo } from "react";
import { getSuggestions } from "../../utils/getSuggestions";
import useDebounce from "../../hooks/useDebounce";
import useGeoLocation from "../../hooks/useGeoLocation";

export default function Suggestions({ value, sendRequest, showSuggestions, inputRef }) {
  const [geoLocation, getGeoLocation] = useGeoLocation();
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    getGeoLocation();
  }, []);

  const suggestions = useMemo(() => {
    if (!debouncedValue) return [];

    return getSuggestions(debouncedValue);
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

  const handleGeoLocation = () => {
    const { lat, lon, html } = geoLocation;
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
      {geoLocation ? (
        <div className="suggestion fade-in" onClick={handleGeoLocation}>
          <p className="text-md">{geoLocation.html}</p>
        </div>
      ) : null}
      {suggestions.map((suggestion) => {
        return (
          <div
            className="suggestion fade-in"
            key={suggestion.name}
            onClick={() => handleSuggestion(suggestion)}
          >
            <p className="text-md">{suggestion.html}</p>
          </div>
        );
      })}
    </div>
  );
}
