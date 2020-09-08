/*==================
[NodeJS] Unit Convert - Pressure - Technical Atmosphere To Pascal
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function technicalatmosphereToPascal
 * @param {number} value
 * @returns {number}
 */
function technicalatmosphereToPascal(value) {
	return (
		advancedDetermine.isNumber(value) == true ? value * 98066.5 : internalService.prefabTypeError("value", "number")
	);
}
module.exports = technicalatmosphereToPascal;
