import "./Suggestions.css";

import { useEffect, useState } from "react";
import { getSuggestions } from "../../utils/getSuggestions";
import useDebounce from "../../hooks/useDebounce";

export default function Suggestions({
  value,
  setValue,
  sendRequest,
  inputRef,
}) {
  const [suggestions, setSuggestions] = useState([]);
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    if (debouncedValue) {
      const results = getSuggestions(debouncedValue).splice(0, 5);
      setSuggestions(results);
    }
  }, [debouncedValue]);

  const handleSuggestion = async (location, htmlValue) => {
    inputRef.current.value = htmlValue;
    setValue(location);
    sendRequest();
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
