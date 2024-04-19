import { background, weatherIcons } from "./availableAssets";

/**
 * @param {Object} current Current weather data.
 * @returns {Object} An object containing background and weather icons.
 * @description Returns background and weather icons based on weather conditions and whether it is daytime or nighttime.
 */
export const getAssets = (current) => {
  const isDay = current.is_day;
  const type = weatherType(current.condition.text);

  let backgroundImage, weatherIcon;
  switch (type) {
    case "heavy snow":
      backgroundImage = isDay ? background.day.storm : background.night.storm;
      weatherIcon = isDay ? weatherIcons.day.heavySnow : weatherIcons.night.heavySnow;
      break;
    case "snow":
      backgroundImage = isDay ? background.day.rain : background.night.rain;
      weatherIcon = isDay ? weatherIcons.day.snow : weatherIcons.night.snow;
      break;
    case "heavy rain":
      backgroundImage = isDay ? background.day.storm : background.night.storm;
      weatherIcon = isDay ? weatherIcons.day.storm : weatherIcons.night.storm;
      break;
    case "rain":
      backgroundImage = isDay ? background.day.rain : background.night.rain;
      weatherIcon = isDay ? weatherIcons.day.rain : weatherIcons.night.rain;
      break;
    case "clear":
      backgroundImage = isDay ? background.day.clear : background.night.clear;
      weatherIcon = isDay ? weatherIcons.day.clear : weatherIcons.night.clear;
      break;
    case "partly cloudy":
      backgroundImage = isDay ? background.day.fewClouds : background.night.fewClouds;
      weatherIcon = isDay ? weatherIcons.day.fewClouds : weatherIcons.night.fewClouds;
      break;
    case "cloudy":
      backgroundImage = isDay ? background.day.cloudy : background.night.cloudy;
      weatherIcon = isDay ? weatherIcons.day.cloudy : weatherIcons.night.cloudy;
      break;
    case "fog":
      backgroundImage = isDay ? background.day.cloudy : background.night.cloudy;
      weatherIcon = isDay ? weatherIcons.day.fog : weatherIcons.night.fog;
      break;
  }

  return {
    backgroundImage,
    weatherIcon,
  };
};

/**
 * @param {Array} days Daily weather data.
 * @description Adds 'icon' key to daily weather data.
 */
export const setNextDaysIcons = (days) => {
  days.map((data) => {
    const type = weatherType(data.day.condition.text);

    let icon = "";
    switch (type) {
      case "heavy snow":
        icon = weatherIcons.day.heavySnow;
        break;
      case "snow":
        icon = weatherIcons.day.snow;
        break;
      case "heavy rain":
        icon = weatherIcons.day.storm;
        break;
      case "rain":
        icon = weatherIcons.day.rain;
        break;
      case "clear":
        icon = weatherIcons.day.clear;
        break;
      case "partly cloudy":
        icon = weatherIcons.day.fewClouds;
        break;
      case "cloudy":
        icon = weatherIcons.day.cloudy;
        break;
      case "fog":
        icon = weatherIcons.day.fog;
        break;
    }

    data.icon = icon;
  });
};

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
