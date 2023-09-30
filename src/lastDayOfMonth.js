/**
 *@function getLastDay get the last day of the month
 *@param year year input
 *@param month month input
 *@returns a number as the last day of the month
 *Created by Tungpt - 27/09/2023
 */
export function getLastDay(year, month) {
  if (!Number.isInteger(year)) {
    throw 'enter an integer value for year';
  } else if (year <= 0) {
    throw 'year must be greater than 0';
  }
  if (!Number.isInteger(month)) {
    throw 'enter an integer value for month';
  } else if (month <= 0 || month > 12) {
    throw 'month must be between 1 and 12';
  }
  const lastDayInMonths = {
    2: (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28,
    4: 30,
    6: 30,
    9: 30,
    11: 30,
  };
  return lastDayInMonths[month] || 31;
}
