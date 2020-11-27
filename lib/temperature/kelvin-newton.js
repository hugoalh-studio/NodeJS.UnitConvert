/*==================
[NodeJS] Unit Convert - Temperature - Kelvin To Newton
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function kelvinToNewton
 * @param {number} value
 * @returns {number}
 */
function kelvinToNewton(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Temperature - Kelvin To Newton)`);
	};
	return ((value - 273.15) * 0.33);
};
module.exports = kelvinToNewton;
