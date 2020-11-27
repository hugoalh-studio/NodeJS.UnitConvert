/*==================
[NodeJS] Unit Convert - Temperature - Kelvin To Delisle
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function kelvinToDelisle
 * @param {number} value
 * @returns {number}
 */
function kelvinToDelisle(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Temperature - Kelvin To Delisle)`);
	};
	return ((373.15 - value) * 1.5);
};
module.exports = kelvinToDelisle;
