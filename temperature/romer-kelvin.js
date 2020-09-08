/*==================
[NodeJS] Unit Convert - Temperature - Romer To Kelvin
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function romerToKelvin
 * @param {number} value
 * @returns {number}
 */
function romerToKelvin(value) {
	return (
		advancedDetermine.isNumber(value) == true ? (value - 7.5) / 0.525 + 273.15 : internalService.prefabTypeError("value", "number")
	);
}
module.exports = romerToKelvin;
