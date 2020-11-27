/*==================
[NodeJS] Unit Convert - Angle - Radian To Turn
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function radianToTurn
 * @param {number} value
 * @returns {number}
 */
function radianToTurn(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Angle - Radian To Turn)`);
	};
	return (value / (2 * Math.PI));
};
module.exports = radianToTurn;
