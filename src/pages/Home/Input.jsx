import "./Input.css";
import { useEffect } from "react";
import toast from "react-hot-toast";
import LoadingIcon from "../../components/LoadingIcon";

export default function Input({ loading, setValue, inputRef, sendRequest, setShowSuggestions }) {
  useEffect(() => {
    window.addEventListener("click", (e) =>
      setShowSuggestions(inputRef.current && inputRef.current.contains(e.target)),
    );
  }, [inputRef]);

  const handleKeyDown = async (e) => {
    setShowSuggestions(true);

    const location = e.target.value.trim();

    if (e.key === "Enter") {
      if (location == "") return toast.error("You must enter a location");

      e.target.blur();
      sendRequest({ location: e.target.value });
    }
  };

  return (
    <div className="search-location">
      <input
        placeholder="Search location"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      {loading ? <LoadingIcon /> : null}
    </div>
  );
}
