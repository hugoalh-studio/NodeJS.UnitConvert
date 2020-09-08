/*==================
[NodeJS] Unit Convert - Pressure - Standard Atmosphere To Pascal
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function standardatmosphereToPascal
 * @param {number} value
 * @returns {number}
 */
function standardatmosphereToPascal(value) {
	return (
		advancedDetermine.isNumber(value) == true ? value * 101325 : internalService.prefabTypeError("value", "number")
	);
}
module.exports = standardatmosphereToPascal;
