/*==================
[NodeJS] Unit Convert - Temperature - Kelvin To Delisle
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function kelvinToDelisle
 * @param {number} value
 * @returns {number}
 */
function kelvinToDelisle(value) {
	return (
		advancedDetermine.isNumber(value) == true ? (373.15 - value) * 1.5 : internalService.prefabTypeError("value", "number")
	);
}
module.exports = kelvinToDelisle;
