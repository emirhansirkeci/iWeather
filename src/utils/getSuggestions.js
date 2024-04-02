import places from "./places.json";

/**
 * @param {String} value The search value to match suggestions.
 * @param {String} limit [limit=5] - The maximum number of suggestions to return.
 * @returns {Array} An array of suggestion objects.
 * @description Returns suggestions matching the given search value.
 */
export const getSuggestions = (value, limit = 5) => {
  const suggestions = [];

  places.forEach((place) => {
    if (!place.name.startsWith(value.toLowerCase())) return;

    suggestions.push({
      name: place.name,
      lat: place.lat,
      lon: place.lon,
      html: place.name[0].toUpperCase() + place.name.slice(1) + " - Turkey",
    });
  });

  return suggestions.splice(0, limit);
};
