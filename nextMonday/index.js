"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nextMonday;

var _index = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));

var _index2 = _interopRequireDefault(require("../nextDay/index.js"));

var _index3 = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name nextMonday
 * @category Weekday Helpers
 * @summary When is the next Monday?
 *
 * @description
 * When is the next Monday?
 *
 * @param {Date | number} date - the date to check
 * @returns {Date} - the date is the next Monday
 * @throws {TypeError} - the date should be a valid date
 * @throws {TypeError} - 1 argument required
 *
 * @example
 * // When is the next Monday after Mar, 22, 2020?
 * const result = nextMonday(new Date(2020, 2, 22))
 * //=> Mon Mar 23 2020 00:00:00
 */
function nextMonday(date) {
  (0, _index.default)(1, arguments);
  return (0, _index2.default)((0, _index3.default)(date), 1);
}

module.exports = exports.default;