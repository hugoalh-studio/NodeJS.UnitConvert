/*==================
[NodeJS] Unit Convert - Temperature - Kelvin To Fahrenheit
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function kelvinToFahrenheit
 * @param {number} value
 * @returns {number}
 */
function kelvinToFahrenheit(value) {
	return (
		advancedDetermine.isNumber(value) == true ? value * 1.8 - 459.67 : internalService.prefabTypeError("value", "number")
	);
}
module.exports = kelvinToFahrenheit;
