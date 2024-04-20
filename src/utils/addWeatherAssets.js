import { background, weatherIcons } from "./availableAssets";

/**
 * @param {Object} weatherData - The weather data object.
 * @returns {void}
 * @description Adds weather assets as keys to each day in the weather data.
 */
export const addWeatherAssets = (weatherData) => {
  weatherData.forecast.forecastday.forEach((day) => {
    const { backgroundImage, weatherIcon, icon } = getAssets(day.day);

    day.backgroundImage = backgroundImage;
    day.weatherIcon = weatherIcon;
    day.icon = icon;
  });
};

/**
 * @param {Object} day - Object representing the daily weather information.
 * @returns {Object} An object containing icons for the weather conditions.
 */
const getAssets = (day) => {
  const isDay = day.is_day;
  const type = weatherType(day.condition.text);

  let backgroundImage, weatherIcon, icon;
  switch (type) {
    case "heavy snow":
      backgroundImage = isDay ? background.day.storm : background.night.storm;
      weatherIcon = isDay ? weatherIcons.day.heavySnow : weatherIcons.night.heavySnow;
      icon = weatherIcons.day.heavySnow;
      break;
    case "snow":
      backgroundImage = isDay ? background.day.rain : background.night.rain;
      weatherIcon = isDay ? weatherIcons.day.snow : weatherIcons.night.snow;
      icon = weatherIcons.day.snow;
      break;
    case "heavy rain":
      backgroundImage = isDay ? background.day.storm : background.night.storm;
      weatherIcon = isDay ? weatherIcons.day.storm : weatherIcons.night.storm;
      icon = weatherIcons.day.storm;
      break;
    case "rain":
      backgroundImage = isDay ? background.day.rain : background.night.rain;
      weatherIcon = isDay ? weatherIcons.day.rain : weatherIcons.night.rain;
      icon = weatherIcons.day.rain;
      break;
    case "clear":
      backgroundImage = isDay ? background.day.clear : background.night.clear;
      weatherIcon = isDay ? weatherIcons.day.clear : weatherIcons.night.clear;
      icon = weatherIcons.day.clear;
      break;
    case "partly cloudy":
      backgroundImage = isDay ? background.day.fewClouds : background.night.fewClouds;
      weatherIcon = isDay ? weatherIcons.day.fewClouds : weatherIcons.night.fewClouds;
      icon = weatherIcons.day.fewClouds;
      break;
    case "cloudy":
      backgroundImage = isDay ? background.day.cloudy : background.night.cloudy;
      weatherIcon = isDay ? weatherIcons.day.cloudy : weatherIcons.night.cloudy;
      icon = weatherIcons.day.cloudy;
      break;
    case "fog":
      backgroundImage = isDay ? background.day.cloudy : background.night.cloudy;
      weatherIcon = isDay ? weatherIcons.day.fog : weatherIcons.night.fog;
      icon = weatherIcons.day.fog;
      break;
    default:
      backgroundImage = isDay ? background.day.cloudy : background.night.cloudy;
      weatherIcon = isDay ? weatherIcons.day.fog : weatherIcons.night.fog;
      icon = weatherIcons.day.fog;
      break;
  }

  return {
    backgroundImage,
    weatherIcon,
    icon,
  };
};

/**
 * Determines the type of weather condition based on the provided condition text.
 * @param {string} condition - Text describing the weather condition.
 * @returns {string|null} The type of weather condition.
 */
const weatherType = (condition) => {
  condition = condition.trim().toLowerCase();
  const reg = (arr) => new RegExp(arr.join("|")).test(condition);

  if (reg(["heavy snow", "blizzard"])) return "heavy snow";
  else if (reg(["snow", "sleet", "ice pellets"])) return "snow";
  else if (reg(["heavy rain", "rain shower", "thundery outbreaks possible"])) return "heavy rain";
  else if (reg(["rain", "drizzle"])) return "rain";
  else if (reg(["sunny", "clear"])) return "clear";
  else if (reg(["partly cloudy"])) return "partly cloudy";
  else if (reg(["overcast", "cloudy"])) return "cloudy";
  else if (reg(["fog", "mist"])) return "fog";
  else return null;
};
