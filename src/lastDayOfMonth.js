/**
 *@function getLastDay get the last day of the month
 *@param year year input
 *@param month month input
 *@returns the last day of month format as dd/MM/yyyy
 *Created by Tungpt - 27/09/2023
 */
function getLastDay(year, month) {
  if (!Number.isInteger(year)) {
    throw "enter an integer value for year";
  } else if (year <= 0) {
    throw "year must be greater than 0";
  }
  if (!Number.isInteger(month)) {
    throw "enter an integer value for month";
  } else if (month <= 0 || month > 12) {
    throw "month must be between 1 and 12";
  }
  let lastDay;
  switch (month) {
    case 2:
      lastDay =
        (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      lastDay = 30;
      break;
    default:
      lastDay = 31;
      break;
  }
  month = String(month).padStart(2, "0");
  year = String(year).padStart(4, "0");
  return `${lastDay}/${month}/${year}`;
}
// exports function
module.exports = getLastDay;
