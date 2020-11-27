/*==================
[NodeJS] Unit Convert - Temperature - Romer To Kelvin
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function romerToKelvin
 * @param {number} value
 * @returns {number}
 */
function romerToKelvin(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Temperature - Romer To Kelvin)`);
	};
	return ((value - 7.5) / 0.525 + 273.15);
};
module.exports = romerToKelvin;
