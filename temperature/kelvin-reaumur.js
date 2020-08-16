/*==================
[NodeJS] Unit Convert - Temperature - Kelvin To Reaumur
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function kelvinToReaumur
 * @param {number} value
 */
function kelvinToReaumur(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? ((value - 273.15) * 0.8) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = kelvinToReaumur;
