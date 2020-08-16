/*==================
[NodeJS] Unit Convert - Temperature - Rankine To Kelvin
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function rankineToKelvin
 * @param {number} value
 */
function rankineToKelvin(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value / 1.8) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = rankineToKelvin;
