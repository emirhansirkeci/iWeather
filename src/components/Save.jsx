import toast from "react-hot-toast";
import "./Save.css";

import bookmark from "@assets/bookmark.svg";
import added from "@assets/bookmark-added.svg";

import useBookmarks from "../hooks/useBookmarks";
import { useEffect, useState } from "react";

export default function Save({ coords, location }) {
  const [saved, setSaved] = useState(false);
  const { saveLocation, deleteLocation, findInBookmarks } = useBookmarks();

  const controlIsSaved = async () => {
    const result = await findInBookmarks(coords, location);
    setSaved(result);
  };

  useEffect(() => {
    controlIsSaved();
  }, []);

  const handleSave = async () => {
    toast.dismiss();
    toast.success("Location added to your bookmarks.");
    saveLocation(coords, location);
    setSaved(true);
  };

  const handleDelete = async () => {
    toast.dismiss();
    toast.success("Location deleted from your bookmarks.");
    deleteLocation(coords, location);
    setSaved(false);
  };

  return (
    <div className="save-icon" onClick={saved ? handleDelete : handleSave}>
      <img src={saved ? added : bookmark} width="24px" />
    </div>
  );
}
