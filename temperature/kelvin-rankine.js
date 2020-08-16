/*==================
[NodeJS] Unit Convert - Temperature - Kelvin To Rankine
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function kelvinToRankine
 * @param {number} value
 */
function kelvinToRankine(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value * 1.8) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = kelvinToRankine;
