/*==================
[NodeJS] Unit Convert - Temperature - Celsius To Kelvin
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function celsiusToKelvin
 * @param {number} value
 * @returns {number}
 */
function celsiusToKelvin(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Temperature - Celsius To Kelvin)`);
	};
	return (value + 273.15);
};
module.exports = celsiusToKelvin;
