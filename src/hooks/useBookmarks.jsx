import { useEffect } from "react";

export default function useBookmarks() {
  const getBookmarks = async () => {
    const data = await JSON.parse(localStorage.getItem("bookmarks"));
    return data;
  };

  const setBookmarks = (data) => {
    localStorage.setItem("bookmarks", JSON.stringify(data));
  };

  const initalizeBookmarks = async () => {
    const defined = await isBookmarksDefined();
    if (!defined) setBookmarks([]);
  };

  const isBookmarksDefined = async () => {
    const locations = await getBookmarks();
    return Array.isArray(locations);
  };

  const findInBookmarks = async (coords, location) => {
    const locations = await getBookmarks();
    const defined = await isBookmarksDefined();
    if (!defined) return;

    const result = locations.find((saved) => {
      if (
        saved.coords.lat === coords.lat &&
        saved.coords.lon === coords.lon &&
        saved.location === location
      )
        return saved;
    });

    return result;
  };

  const saveLocation = async (coords, location) => {
    const locations = await getBookmarks();

    const data = {
      coords,
      location,
    };

    locations.push(data);

    setBookmarks(locations);
    return locations;
  };

  const deleteLocation = async (coords, location) => {
    const locations = await getBookmarks();

    console.log(coords, location);
    const updatedLocations = locations.filter((saved) => {
      return (
        saved.coords.lat !== coords.lat ||
        saved.coords.lon !== coords.lon ||
        saved.location !== location
      );
    });

    setBookmarks(updatedLocations);
    return updatedLocations;
  };

  useEffect(() => {
    initalizeBookmarks();
  }, []);

  return {
    initalizeBookmarks,
    findInBookmarks,
    getBookmarks,
    setBookmarks,
    isBookmarksDefined,
    saveLocation,
    deleteLocation,
  };
}
