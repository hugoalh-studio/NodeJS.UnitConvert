/*==================
[NodeJS] Unit Convert - Temperature - Celsius To Kelvin
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function celsiusToKelvin
 * @param {number} value
 * @returns {number}
 */
function celsiusToKelvin(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value + 273.15) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = celsiusToKelvin;
