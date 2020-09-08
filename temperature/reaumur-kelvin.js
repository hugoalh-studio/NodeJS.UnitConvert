/*==================
[NodeJS] Unit Convert - Temperature - Reaumur To Kelvin
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function reaumurToKelvin
 * @param {number} value
 * @returns {number}
 */
function reaumurToKelvin(value) {
	return (
		advancedDetermine.isNumber(value) == true ? value * 1.25 + 273.15 : internalService.prefabTypeError("value", "number")
	);
}
module.exports = reaumurToKelvin;
