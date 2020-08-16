/*==================
[NodeJS] Unit Convert - Temperature - Kelvin To Romer
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function kelvinToRomer
 * @param {number} value
 */
function kelvinToRomer(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? ((value - 273.15) * 0.525 + 7.5) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = kelvinToRomer;
