import c from "countrycitystatejson";

const all = c.getAll();

for (const key in all) {
  const country = all[key].name;
  const states = all[key].states;

  if (country.includes("Turkey"))
    console.log({
      country,
      states,
    });
}
