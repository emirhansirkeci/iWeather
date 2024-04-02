import "./Input.css";
import loadingIcon from "../../assets/images/loading.svg";
import { useEffect } from "react";

export default function Input(props) {
  const { loading, setValue, inputRef, sendRequest, setShowSuggestions } =
    props;

  useEffect(() => {
    window.addEventListener("click", (e) =>
      setShowSuggestions(
        inputRef.current && inputRef.current.contains(e.target)
      )
    );
  }, [inputRef]);

  const handleKeyDown = async (e) => {
    setShowSuggestions(true);

    if (e.key === "Enter") {
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
      {loading ? <img src={loadingIcon} /> : null}
    </div>
  );
}
