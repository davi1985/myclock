export const getTime = () => {
  const time = new Date().toLocaleTimeString();
  const [hour, minute, secondAndDayPartial] = time.split(":");
  const [second, beforeOrAfterMidday] = secondAndDayPartial.split(" ");

  return { hour, minute, second, beforeOrAfterMidday };
};
