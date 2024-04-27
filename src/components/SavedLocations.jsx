import { useNavigate } from "react-router-dom";
import "./SavedLocations.css";
import bookmark from "@assets/bookmark.svg";

export default function SavedLocations() {
  const navigate = useNavigate();

  const handleSavedLocations = () => {
    navigate("bookmarks");
  };

  return (
    <div className="saved-locations" onClick={handleSavedLocations}>
      <p className="text-md">Saved locations</p>
      <div className="saved-locations-icon">{<img src={bookmark} width="32px" />}</div>
    </div>
  );
}
