import axios from "axios";

/**
 * @param {String} location The location to fetch weather data for.
 * @param {Function} navigate The navigate function provided by useNavigate() hook in React Router.
 * @description Fetches weather data for a given location and navigates to /forecast upon success. Throws an error if the operation fails.
 */
export async function fetchDataAndNavigate(location, navigate) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5&aqi=no&alerts=no`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

    navigate("/forecast", {
      state: {
        searchedQuery: location,
        weatherData: response.data,
      },
    });
  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw error;
  }
}
