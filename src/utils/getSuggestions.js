import places from "./places.json";
import Fuse from "fuse.js";
import { prettyString } from "./prettyString";

/**
 * Returns suggestions matching the given search value.
 * @param {String} value The search value to match suggestions.
 * @param {String} limit [limit=5] - The maximum number of suggestions to return.
 * @returns {Array} An array of suggestion objects.
 */
export const getSuggestions = (value, limit = 5) => {
  const fuse = new Fuse(places, {
    keys: ["name"],
    threshold: 0.5,
  });

  return fuse
    .search(value)
    .slice(0, limit)
    .map((result) => {
      const html = `${prettyString(result.item.name)} - ${prettyString(result.item.country)}`;

      return { ...result.item, html };
    });
};
