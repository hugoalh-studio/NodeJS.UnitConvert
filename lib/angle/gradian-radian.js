/*==================
[NodeJS] Unit Convert - Angle - Gradian To Radian
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function gradianToRadian
 * @param {number} value
 * @returns {number}
 */
function gradianToRadian(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Angle - Gradian To Radian)`);
	};
	return (value * (Math.PI / 200));
};
module.exports = gradianToRadian;
