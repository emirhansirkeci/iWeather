// Import background
import clearDay from "@assets/images/background/clear-day.png";
import clearNight from "@assets/images/background/clear-night.png";

import cloudyDay from "@assets/images/background/cloudy-day.png";
import cloudyNight from "@assets/images/background/cloudy-night.png";

import fewCloudsDay from "@assets/images/background/few-clouds-day.png";
import fewCloudsNight from "@assets/images/background/few-clouds-night.png";

import rainDay from "@assets/images/background/rain-day.png";
import rainNight from "@assets/images/background/rain-night.png";

import stormDay from "@assets/images/background/storm-day.png";
import stormNight from "@assets/images/background/storm-night.png";

// Import Phosphor Icons
import thermalSensation from "@assets/images/phosphor-icons/phosphor-thermometer-light.svg";
import probabilityOfRain from "@assets/images/phosphor-icons/phosphor-cloud-rain-light.svg";
import windSpeed from "@assets/images/phosphor-icons/phosphor-wind-light.svg";
import airHumidity from "@assets/images/phosphor-icons/phosphor-drop-light.svg";
import uvIndex from "@assets/images/phosphor-icons/phosphor-sun-dim-light.svg";

// Import Weather Icons
import weatherClearDay from "@assets/images/weather-icons/weather-clear-day.svg";
import weatherClearNight from "@assets/images/weather-icons/weather-clear-night.svg";

import weatherFewCloudsDay from "@assets/images/weather-icons/weather-few-clouds-day.svg";
import weatherFewCloudsNight from "@assets/images/weather-icons/weather-few-clouds-night.svg";

import weatherCloudyDay from "@assets/images/weather-icons/weather-cloudy-day.svg";
import weatherCloudyNight from "@assets/images/weather-icons/weather-cloudy-night.svg";

import weatherRainDay from "@assets/images/weather-icons/weather-rain-day.svg";
import weatherRainNight from "@assets/images/weather-icons/weather-rain-night.svg";

import weatherStormDay from "@assets/images/weather-icons/weather-storm-day.svg";
import weatherStormNight from "@assets/images/weather-icons/weather-storm-night.svg";

import weatherSnowDay from "@assets/images/weather-icons/weather-snow-day.svg";
import weatherSnowNight from "@assets/images/weather-icons/weather-snow-night.svg";

import weatherHeavySnowDay from "@assets/images/weather-icons/weather-heavy-snow-day.svg";
import weatherHeavySnowNight from "@assets/images/weather-icons/weather-heavy-snow-night.svg";

import weatherFogDay from "@assets/images/weather-icons/weather-fog-day.svg";
import weatherFogNight from "@assets/images/weather-icons/weather-fog-night.svg";

export const background = {
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
    fewClouds: weatherFewCloudsDay,
    cloudy: weatherCloudyDay,
    rain: weatherRainDay,
    storm: weatherStormDay,
    snow: weatherSnowDay,
    heavySnow: weatherHeavySnowDay,
    fog: weatherFogDay,
  },
  night: {
    clear: weatherClearNight,
    fewClouds: weatherFewCloudsNight,
    cloudy: weatherCloudyNight,
    rain: weatherRainNight,
    storm: weatherStormNight,
    snow: weatherSnowNight,
    heavySnow: weatherHeavySnowNight,
    fog: weatherFogNight,
  },
};

export const phosphorIcons = {
  thermalSensation,
  probabilityOfRain,
  windSpeed,
  airHumidity,
  uvIndex,
};
