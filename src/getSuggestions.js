import c from "countrycitystatejson";

const all = c.getAll();

export const parseData = () => {
  const locations = [];

  for (const key in all) {
    const obj = {
      country: "",
      countryCode: "",
      states: [],
    };

    const data = all[key];
    const countryCode = key;
    const country = data.name;
    const states = data.states;

    obj.country = country;
    obj.countryCode = countryCode;

    for (const state in states) {
      const stateData = states[state];

      const statesInfo = {
        name: state,
        cities: [],
      };

      for (const index in stateData) {
        if (stateData[index].name != state)
          statesInfo.cities.push(stateData[index].name);
      }

      obj.states.push(statesInfo);
    }

    locations.push(obj);
  }

  return locations;
};

export const getSuggestions = (value) => {
  const suggestions = [];
  const data = parseData();

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
