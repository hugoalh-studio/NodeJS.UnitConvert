/*==================
[NodeJS] Unit Convert - Angle - Degree To Radian
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function degreeToRadian
 * @param {number} value
 * @returns {number}
 */
function degreeToRadian(value) {
	return (
		advancedDetermine.isNumber(value) == true ? value * (Math.PI / 180) : internalService.prefabTypeError("value", "number")
	);
}
module.exports = degreeToRadian;
