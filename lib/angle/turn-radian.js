/*==================
[NodeJS] Unit Convert - Angle - Turn To Radian
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function turnToRadian
 * @param {number} value
 * @returns {number}
 */
function turnToRadian(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Angle - Turn To Radian)`);
	};
	return (value * (2 * Math.PI));
};
module.exports = turnToRadian;
