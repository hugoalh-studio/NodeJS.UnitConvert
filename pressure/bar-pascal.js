/*==================
[NodeJS] Unit Convert - Pressure - Bar To Pascal
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function barToPascal
 * @param {number} value
 * @returns {number}
 */
function barToPascal(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value * 1e5) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = barToPascal;
