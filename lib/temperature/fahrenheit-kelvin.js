/*==================
[NodeJS] Unit Convert - Temperature - Fahrenheit To Kelvin
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function fahrenheitToKelvin
 * @param {number} value
 * @returns {number}
 */
function fahrenheitToKelvin(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Temperature - Fahrenheit To Kelvin)`);
	};
	return ((value + 459.67) / 1.8);
};
module.exports = fahrenheitToKelvin;
