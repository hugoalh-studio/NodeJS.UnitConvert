/*==================
[NodeJS] Unit Convert - Temperature - Kelvin To Romer
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function kelvinToRomer
 * @param {number} value
 * @returns {number}
 */
function kelvinToRomer(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Temperature - Kelvin To Romer)`);
	};
	return ((value - 273.15) * 0.525 + 7.5);
};
module.exports = kelvinToRomer;
