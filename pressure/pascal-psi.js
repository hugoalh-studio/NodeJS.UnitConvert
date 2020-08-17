/*==================
[NodeJS] Unit Convert - Pressure - Pascal To PSI
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function pascalToPSI
 * @param {number} value
 * @returns {number}
 */
function pascalToPSI(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value / ((0.45359237 * 9.80665) / (Math.pow(0.0254, 2)))) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = pascalToPSI;
