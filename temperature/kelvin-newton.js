/*==================
[NodeJS] Unit Convert - Temperature - Kelvin To Newton
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function kelvinToNewton
 * @param {number} value
 * @returns {number}
 */
function kelvinToNewton(value) {
	return (
		advancedDetermine.isNumber(value) == true ? (value - 273.15) * 0.33 : internalService.prefabTypeError("value", "number")
	);
}
module.exports = kelvinToNewton;
