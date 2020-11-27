/*==================
[NodeJS] Unit Convert - Temperature - Kelvin To Celsius
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function kelvinToCelsius
 * @param {number} value
 * @returns {number}
 */
function kelvinToCelsius(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Temperature - Kelvin To Celsius)`);
	};
	return (value - 273.15);
};
module.exports = kelvinToCelsius;
