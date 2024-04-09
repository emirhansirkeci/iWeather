/**
 * Capitalizes the first letter of the string and converts the rest to lowercase.
 * @param {string} str - The string to format.
 * @returns {string} The formatted string.
 */
export const prettyString = (str) => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};
