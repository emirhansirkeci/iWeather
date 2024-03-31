// import fs from "fs";
// const filePath = "./weather_conditions.json";

// fs.readFile(filePath, "utf8", (err, data) => {
//   const weatherData = JSON.parse(data);

//   const obj = [];
//   weatherData.forEach((d) => {
//     obj.push({
//       condition: d.day,
//     });
//   });

//   console.log(obj);
// });

const weatherData = [
  { condition: "Sunny" },
  { condition: "Partly cloudy" },
  { condition: "Cloudy" },
  { condition: "Overcast" },
  { condition: "Mist" },
  { condition: "Patchy rain possible" },
  { condition: "Patchy snow possible" },
  { condition: "Patchy sleet possible" },
  { condition: "Patchy freezing drizzle possible" },
  { condition: "Thundery outbreaks possible" },
  { condition: "Blowing snow" },
  { condition: "Blizzard" },
  { condition: "Fog" },
  { condition: "Freezing fog" },
  { condition: "Patchy light drizzle" },
  { condition: "Light drizzle" },
  { condition: "Freezing drizzle" },
  { condition: "Heavy freezing drizzle" },
  { condition: "Patchy light rain" },
  { condition: "Light rain" },
  { condition: "Moderate rain at times" },
  { condition: "Moderate rain" },
  { condition: "Heavy rain at times" },
  { condition: "Heavy rain" },
  { condition: "Light freezing rain" },
  { condition: "Moderate or heavy freezing rain" },
  { condition: "Light sleet" },
  { condition: "Moderate or heavy sleet" },
  { condition: "Patchy light snow" },
  { condition: "Light snow" },
  { condition: "Patchy moderate snow" },
  { condition: "Moderate snow" },
  { condition: "Patchy heavy snow" },
  { condition: "Heavy snow" },
  { condition: "Ice pellets" },
  { condition: "Light rain shower" },
  { condition: "Moderate or heavy rain shower" },
  { condition: "Torrential rain shower" },
  { condition: "Light sleet showers" },
  { condition: "Moderate or heavy sleet showers" },
  { condition: "Light snow showers" },
  { condition: "Moderate or heavy snow showers" },
  { condition: "Light showers of ice pellets" },
  { condition: "Moderate or heavy showers of ice pellets" },
  { condition: "Patchy light rain with thunder" },
  { condition: "Moderate or heavy rain with thunder" },
  { condition: "Patchy light snow with thunder" },
  { condition: "Moderate or heavy snow with thunder" },
];

const weatherType = (condition) => {
  const reg = (arr) => new RegExp(arr.join("|")).test(condition);

  if (reg(["heavy snow", "blizzard"])) return "heavy snow";
  else if (reg(["snow", "sleet", "ice pellets"])) return "snow";
  else if (reg(["heavy rain", "rain shower", "thundery outbreaks possible"]))
    return "heavy rain";
  else if (reg(["rain", "drizzle"])) return "rain";
  else if (reg(["sunny", "clear"])) return "clear";
  else if (reg(["partly cloudy"])) return "partly cloudy";
  else if (reg(["overcast", "cloudy"])) return "cloudy";
  else if (reg(["fog", "mist"])) return "fog";
  else return null;
};

const obj = {
  snow: [],
  heavySnow: [],
  heavyRain: [],
  rain: [],
  clear: [],
  partlyCloudy: [],
  cloudy: [],
  fog: [],
  notFound: [],
};

// Hava durumlarını grupla
weatherData.forEach((data) => {
  const condition = data.condition.toLowerCase();

  const s = weatherType(condition);

  switch (s) {
    case "heavy snow":
      obj.heavySnow.push(condition);
      break;
    case "snow":
      obj.snow.push(condition);
      break;
    case "heavy rain":
      obj.heavyRain.push(condition);
      break;
    case "rain":
      obj.rain.push(condition);
      break;
    case "clear":
      obj.clear.push(condition);
      break;
    case "partly cloudy":
      obj.partlyCloudy.push(condition);
      break;
    case "cloudy":
      obj.cloudy.push(condition);
      break;
    case "fog":
      obj.fog.push(condition);
      break;
    default:
      obj.notFound.push(condition);
      break;
  }
});

console.log({
  obj,

  length: weatherData.length,
  groups:
    obj.heavySnow.length +
    obj.snow.length +
    obj.heavyRain.length +
    obj.rain.length +
    obj.clear.length +
    obj.cloudy.length +
    obj.partlyCloudy.length +
    obj.fog.length +
    obj.notFound.length,
});
