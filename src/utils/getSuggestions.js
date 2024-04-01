import parsedData from "./locations.json";

/**
 * @param {String} value
 * @returns {Array}
 * @description Returns suggestions matching the given search value.
 */
export const getSuggestions = (value) => {
  const data = parsedData;
  const suggestions = [];

  data.forEach((country, index) => {
    country.states.forEach((state) => {
      if (state.name.toLowerCase().startsWith(value.toLowerCase())) {
        suggestions.push({
          key: index,
          found: state.name + "," + country.country,
          country: country.country,
          countryCode: country.countryCode,
          state: state.name,
          cities: state.cities,
          html: state.name + " - " + country.country,
        });
      }

      state.cities.forEach((city) => {
        if (city.toLowerCase().startsWith(value.toLowerCase())) {
          suggestions.push({
            key: index,
            found: city + "," + state.name + "," + country.country,
            country: country.country,
            countryCode: country.countryCode,
            state: state.name,
            city,
            html: city + ", " + state.name + " - " + country.country,
          });
        }
      });
    });
  });

  return suggestions;
};
