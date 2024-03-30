// Import Images
import clearDay from "./assets/images/clear-day.png";
import clearNight from "./assets/images/clear-night.png";

import cloudyDay from "./assets/images/cloudy-day.png";
import cloudyNight from "./assets/images/cloudy-night.png";

import fewCloudsDay from "./assets/images/few-clouds-day.png";
import fewCloudsNight from "./assets/images/few-clouds-night.png";

import rainDay from "./assets/images/rain-day.png";
import rainNight from "./assets/images/rain-night.png";

import stormDay from "./assets/images/storm-day.png";
import stormNight from "./assets/images/storm-night.png";

// Import Phosphor Icons
import thermalSensation from "./assets/phosphor-icons/phosphor-thermometer-light.svg";
import probabilityOfRain from "./assets/phosphor-icons/phosphor-cloud-rain-light.svg";
import windSpeed from "./assets/phosphor-icons/phosphor-wind-light.svg";
import airHumidity from "./assets/phosphor-icons/phosphor-drop-light.svg";
import uvIndex from "./assets/phosphor-icons/phosphor-sun-dim-light.svg";

// Import Weather Icons
import weatherClearDay from "./assets/weather-icons/weather-clear-day.svg";
import weatherClearNight from "./assets/weather-icons/weather-clear-night.svg";

import weatherCloudsDay from "./assets/weather-icons/weather-clouds-day.svg";
import weatherCloudsNight from "./assets/weather-icons/weather-clouds-night.svg";

import weatherCloudyDay from "./assets/weather-icons/weather-cloudy-day.svg";
import weatherCloudyNight from "./assets/weather-icons/weather-cloudy-night.svg";

import weatherRainDay from "./assets/weather-icons/weather-rain-day.svg";
import weatherRainNight from "./assets/weather-icons/weather-rain-night.svg";

import weatherStormDay from "./assets/weather-icons/weather-storm-day.svg";
import weatherStormNight from "./assets/weather-icons/weather-storm-night.svg";

export const images = {
  day: {
    clear: clearDay,
    cloudy: cloudyDay,
    fewClouds: fewCloudsDay,
    rain: rainDay,
    storm: stormDay,
  },
  night: {
    clear: clearNight,
    cloudy: cloudyNight,
    fewClouds: fewCloudsNight,
    rain: rainNight,
    storm: stormNight,
  },
};

export const weatherIcons = {
  day: {
    clear: weatherClearDay,
    clouds: weatherCloudsDay,
    cloudy: weatherCloudyDay,
    rain: weatherRainDay,
    storm: weatherStormDay,
  },
  night: {
    clear: weatherClearNight,
    clouds: weatherCloudsNight,
    cloudy: weatherCloudyNight,
    rain: weatherRainNight,
    storm: weatherStormNight,
  },
};

export const phosphorIcons = {
  thermalSensation,
  probabilityOfRain,
  windSpeed,
  airHumidity,
  uvIndex,
};
