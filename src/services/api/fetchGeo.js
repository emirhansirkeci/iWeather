import axios from "axios";

export async function directGeocoding(location) {
  const devPrefix = " https://cors-anywhere.herokuapp.com/";
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const url = `${devPrefix}https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`;

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
    throw error;
  }
}

export async function reverseGeocoding(lat, lon) {
  const devPrefix = " https://cors-anywhere.herokuapp.com/";
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const url = `${devPrefix}http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`;

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
    throw error;
  }
}

export async function geoCities(location) {
  const options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    params: {
      namePrefix: location,
    },
    headers: {
      "X-RapidAPI-Key": "73422ec256msh4c2b4290f8012efp153a2fjsn78ca7656f52e",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}
