export const TimeValidate = (delimeter: string) => {
  const date = new Date();
  let month = "" + (date.getMonth() + 1);
  let day = "" + date.getDate();
  let year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const second = date.getSeconds();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day, hours, minutes, second].join(delimeter);
};
