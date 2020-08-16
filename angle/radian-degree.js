/*==================
[NodeJS] Unit Convert - Angle - Radian To Degree
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function radianToDegree
 * @param {number} value
 */
function radianToDegree(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value / (Math.PI / 180)) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = radianToDegree;
