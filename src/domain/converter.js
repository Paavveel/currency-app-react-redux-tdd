export const rubToUsd = (value, course) => {
  return Number((value / course).toFixed(2));
};

export const usdToRub = (value, course) => {
  return Number((value * course).toFixed(2));
};
