/*==================
[NodeJS] Unit Convert - Angle - Radian To Turn
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function radianToTurn
 * @param {number} value
 */
function radianToTurn(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value / (2 * Math.PI)) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = radianToTurn;
