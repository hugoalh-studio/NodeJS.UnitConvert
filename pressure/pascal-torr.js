/*==================
[NodeJS] Unit Convert - Pressure - Pascal To Torr
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function pascalToTorr
 * @param {number} value
 * @returns {number}
 */
function pascalToTorr(value) {
	return (
		advancedDetermine.isNumber(value) == true ? value / (101325 / 760) : internalService.prefabTypeError("value", "number")
	);
}
module.exports = pascalToTorr;
