/*==================
[NodeJS] Unit Convert - Temperature - Fahrenheit To Kelvin
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function fahrenheitToKelvin
 * @param {number} value
 * @returns {number}
 */
function fahrenheitToKelvin(value) {
	return (
		advancedDetermine.isNumber(value) == true ? (value + 459.67) / 1.8 : internalService.prefabTypeError("value", "number")
	);
}
module.exports = fahrenheitToKelvin;
