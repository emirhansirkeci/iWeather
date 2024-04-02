export const toShortDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
  });
};

export const toLongDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
