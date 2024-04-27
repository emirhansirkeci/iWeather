import "./index.css";

import { useEffect, useState } from "react";
import useBookmarks from "@hooks/useBookmarks";
import svg from "@assets/delete.svg";
import Card from "@components/Card";
import useRequest from "@hooks/useRequest";
import toast from "react-hot-toast";

export default function index() {
  const [bookmarks, setBookmarks] = useState([]);
  const { getBookmarks, deleteLocation } = useBookmarks();
  const [sendRequest, loading] = useRequest();

  const initialize = async () => {
    const result = await getBookmarks();
    setBookmarks(result);
  };

  useEffect(() => {
    initialize();
  }, []);

  const handleDelete = async (event, coords, location) => {
    event.stopPropagation();
    const bookmarks = await deleteLocation(coords, location);
    setBookmarks(bookmarks);

    toast.dismiss();
    toast.success("Location deleted from your bookmarks.");
  };

  const handleClick = async (coords) => {
    sendRequest({ coords });
  };

  return (
    <div className="bookmarks-wrapper">
      <Card>
        <div className="bookmarks">
          <div className="bookmarks-introduction">
            <h2>Bookmarks</h2>
            <p className="text-md">
              You can view the locations you've saved here to quickly access their weather forecast.
            </p>
          </div>
          <div className="bookmarks-list">
            {bookmarks?.map((marks) => (
              <div
                onClick={() => handleClick(marks.coords, marks.location)}
                className="text-md bookmark"
                key={marks.coords.lat + "," + marks.coords.lon}
              >
                <label>{marks.location}</label>
                <div
                  className="delete-icon"
                  onClick={(event) => handleDelete(event, marks.coords, marks.location)}
                >
                  <img src={svg} width="32px" />
                </div>
              </div>
            ))}

            {bookmarks.length == 0 && (
              <p className="bookmark-empty text-sm">Your bookmarks are empty for now...</p>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
