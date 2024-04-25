import "./Suggestions.css";

import { useMemo } from "react";
import { getSuggestions } from "@utils/getSuggestions";
import useDebounce from "@hooks/useDebounce";

export default function Suggestions({ value, sendRequest, showSuggestions, inputRef }) {
  const debouncedValue = useDebounce(value);

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

  if (!showSuggestions) return null;

  return (
    <div className="suggestions">
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
