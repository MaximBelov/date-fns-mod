import requiredArgs from "../_lib/requiredArgs/index.js";
import nextDay from "../nextDay/index.js";
import toDate from "../toDate/index.js";
/**
 * @name nextTuesday
 * @category Weekday Helpers
 * @summary When is the next Tuesday?
 *
 * @description
 * When is the next Tuesday?
 *
 * @param {Date | number} date - the date to check
 * @returns {Date} - the date is the next Tuesday
 * @throws {TypeError} - the date should be a valid date
 * @throws {TypeError} - 1 argument required
 *
 * @example
 * // When is the next Tuesday after Mar, 22, 2020?
 * const result = nextTuesday(new Date(2020, 2, 22))
 * //=> Tue Mar 24 2020 00:00:00
 */

export default function nextTuesday(date) {
  requiredArgs(1, arguments);
  return nextDay(toDate(date), 2);
}