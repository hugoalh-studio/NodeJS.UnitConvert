/*==================
[NodeJS] Unit Convert - Angle - Radian To Degree
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function radianToDegree
 * @param {number} value
 * @returns {number}
 */
function radianToDegree(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Angle - Radian To Degree)`);
	};
	return (value / (Math.PI / 180));
};
module.exports = radianToDegree;
