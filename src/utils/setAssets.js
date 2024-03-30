import { background, weatherIcons } from "./availableAssets";

/**
 * @param {Object} current Current weather data.
 * @returns {Object} An object containing background and weather icons.
 * @description Returns background and weather icons based on weather conditions and whether it is daytime or nighttime.
 */
export const getImagesBasedByCondition = (current) => {
  let backgroundIcon, weatherIcon;
  const isDay = current.is_day;

  const condition = current.condition.text.trim().toLowerCase();

  switch (condition) {
    case "sunny":
    case "clear":
      backgroundIcon = isDay ? background.day.clear : background.night.clear;
      weatherIcon = isDay ? weatherIcons.day.clear : weatherIcons.night.clear;
      break;
    case "overcast":
    case "cloudy":
      backgroundIcon = isDay ? background.day.cloudy : background.night.cloudy;
      weatherIcon = isDay ? weatherIcons.day.cloudy : weatherIcons.night.cloudy;
      break;
    case "partly cloudy":
      backgroundIcon = isDay
        ? background.day.fewClouds
        : background.night.fewClouds;
      weatherIcon = isDay ? weatherIcons.day.clouds : weatherIcons.night.clouds;
      break;
    case "patchy rain nearby":
      backgroundIcon = isDay ? background.day.rain : background.night.rain;
      weatherIcon = isDay ? weatherIcons.day.rain : weatherIcons.night.rain;
      break;
    case "heavy rain":
      backgroundIcon = isDay ? background.day.storm : background.night.storm;
      weatherIcon = isDay ? weatherIcons.day.storm : weatherIcons.night.storm;
      break;
  }

  return {
    backgroundIcon,
    weatherIcon,
  };
};

/**
 * @param {Array} days Daily weather data.
 * @description Adds 'icon' key to daily weather data.
 */
export const setNextDaysIcons = (days) => {
  days.map((data) => {
    const condition = data.day.condition.text.trim().toLowerCase();
    let icon = "";

    switch (condition) {
      case "sunny":
      case "clear":
        icon = weatherIcons.day.clear;
        break;
      case "partly cloudy":
        icon = weatherIcons.day.clouds;
        break;
      case "overcast":
      case "cloudy":
        icon = weatherIcons.day.cloudy;
        break;
      case "patchy rain nearby":
        icon = weatherIcons.day.rain;
        break;
      case "heavy rain":
        icon = weatherIcons.day.storm;
        break;
    }

    data.icon = icon;
  });
};
