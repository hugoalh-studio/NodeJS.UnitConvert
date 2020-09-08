/*==================
[NodeJS] Unit Convert - Temperature - Delisle To Kelvin
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function delisleToKelvin
 * @param {number} value
 * @returns {number}
 */
function delisleToKelvin(value) {
	return (
		advancedDetermine.isNumber(value) == true ? 373.15 - value / 1.5 : internalService.prefabTypeError("value", "number")
	);
}
module.exports = delisleToKelvin;
