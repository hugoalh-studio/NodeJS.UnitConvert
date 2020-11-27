/*==================
[NodeJS] Unit Convert - Temperature - Kelvin To Fahrenheit
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function kelvinToFahrenheit
 * @param {number} value
 * @returns {number}
 */
function kelvinToFahrenheit(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Temperature - Kelvin To Fahrenheit)`);
	};
	return (value * 1.8 - 459.67);
};
module.exports = kelvinToFahrenheit;
