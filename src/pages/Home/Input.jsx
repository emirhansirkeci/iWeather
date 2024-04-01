import "./Input.css";
import loadingIcon from "../../assets/images/loading.svg";

export default function Input({
  setValue,
  inputRef,
  sendRequest,
  loading,
  setShowSuggestions,
}) {
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
      {loading ? <img src={loadingIcon} /> : <></>}
    </div>
  );
}
