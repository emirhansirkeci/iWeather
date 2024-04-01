import "./Input.css";
import loadingIcon from "../../assets/images/loading.svg";

export default function Input({
  value,
  setValue,
  inputRef,
  sendRequest,
  loading,
}) {
  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.target.blur();
      setValue(e.target.value);
      sendRequest();
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
