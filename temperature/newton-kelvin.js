/*==================
[NodeJS] Unit Convert - Temperature - Newton To Kelvin
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function newtonToKelvin
 * @param {number} value
 */
function newtonToKelvin(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value / 0.33 + 273.15) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = newtonToKelvin;
