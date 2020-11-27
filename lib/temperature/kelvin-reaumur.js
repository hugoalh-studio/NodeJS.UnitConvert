/*==================
[NodeJS] Unit Convert - Temperature - Kelvin To Reaumur
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function kelvinToReaumur
 * @param {number} value
 * @returns {number}
 */
function kelvinToReaumur(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Temperature - Kelvin To Reaumur)`);
	};
	return ((value - 273.15) * 0.8);
};
module.exports = kelvinToReaumur;
