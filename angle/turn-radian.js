/*==================
[NodeJS] Unit Convert - Angle - Turn To Radian
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function turnToRadian
 * @param {number} value
 */
function turnToRadian(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value * (2 * Math.PI)) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = turnToRadian;
