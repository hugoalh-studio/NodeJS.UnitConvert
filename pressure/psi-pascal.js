/*==================
[NodeJS] Unit Convert - Pressure - PSI To Pascal
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function psiToPascal
 * @param {number} value
 * @returns {number}
 */
function psiToPascal(value) {
	return (
		advancedDetermine.isNumber(value) == true ? value * ((0.45359237 * 9.80665) / Math.pow(0.0254, 2)) : internalService.prefabTypeError("value", "number")
	);
}
module.exports = psiToPascal;
