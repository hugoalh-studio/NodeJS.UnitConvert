/*==================
[NodeJS] Unit Convert - Pressure - Torr To Pascal
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function torrToPascal
 * @param {number} value
 * @returns {number}
 */
function torrToPascal(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value * (101325 / 760)) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = torrToPascal;
