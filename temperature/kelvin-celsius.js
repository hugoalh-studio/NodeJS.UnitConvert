/*==================
[NodeJS] Unit Convert - Temperature - Kelvin To Celsius
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function kelvinToCelsius
 * @param {number} value
 * @returns {number}
 */
function kelvinToCelsius(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value - 273.15) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = kelvinToCelsius;
