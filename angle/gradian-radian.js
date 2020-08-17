/*==================
[NodeJS] Unit Convert - Angle - Gradian To Radian
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function gradianToRadian
 * @param {number} value
 * @returns {number}
 */
function gradianToRadian(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value * (Math.PI / 200)) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = gradianToRadian;
