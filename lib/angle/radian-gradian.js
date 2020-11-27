/*==================
[NodeJS] Unit Convert - Angle - Radian To Gradian
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function radianToGradian
 * @param {number} value
 * @returns {number}
 */
function radianToGradian(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Angle - Radian To Gradian)`);
	};
	return (value / (Math.PI / 200));
};
module.exports = radianToGradian;
