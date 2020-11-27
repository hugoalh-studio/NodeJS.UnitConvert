/*==================
[NodeJS] Unit Convert - Angle - Degree To Radian
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function degreeToRadian
 * @param {number} value
 * @returns {number}
 */
function degreeToRadian(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Angle - Degree To Radian)`);
	};
	return (value * (Math.PI / 180));
};
module.exports = degreeToRadian;
