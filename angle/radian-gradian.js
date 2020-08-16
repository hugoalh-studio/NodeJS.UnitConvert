/*==================
[NodeJS] Unit Convert - Angle - Radian To Gradian
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function radianToGradian
 * @param {number} value
 */
function radianToGradian(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value / (Math.PI / 200)) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = radianToGradian;
