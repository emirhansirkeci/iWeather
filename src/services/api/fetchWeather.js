import axios from "axios";

/**
 * @param {Object} coordinates The coordinates of the location to fetch weather data for.
 * @returns {Promise<Object>} A promise that resolves to the weather data object.
 * @throws {Error} - Throws an error if the operation fails.
 * @description Fetches weather data for a given location. Throws an error if the operation fails.
 */
export async function fetchWeather(coordinates) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${
    coordinates.lat + "," + coordinates.lon
  }&days=5&aqi=no&alerts=no`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw Error("No weather forecasts were found for the specified location");
  }
}
