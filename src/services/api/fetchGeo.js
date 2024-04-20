import axios from "axios";

/**
 * Perform direct geocoding to retrieve location data based on the provided location name.
 * @param {string} location The name of the location to perform geocoding.
 * @returns {Promise<Object[]>} A promise that resolves to an array of location data objects.
 * @throws {Error} Throws an error if there's a problem with the axios operation.
 */
export async function directGeocoding(location) {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.data.length == 0) throw Error("The specified location was not found");

    return response.data;
  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw Error("The specified location was not found");
  }
}

/**
 * Perform reverse geocoding to retrieve location data based on the provided latitude and longitude.
 * @param {number} lat The latitude of the location.
 * @param {number} lon The longitude of the location.
 * @returns {Promise<Object[]>} A promise that resolves to an array of location data objects.
 * @throws {Error} Throws an error if there's a problem with the axios operation.
 */
export async function reverseGeocoding(lat, lon) {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`;

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw Error("Location could not be detected automatically.");
  }
}
