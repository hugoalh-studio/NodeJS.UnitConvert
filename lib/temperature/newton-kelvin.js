/*==================
[NodeJS] Unit Convert - Temperature - Newton To Kelvin
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function newtonToKelvin
 * @param {number} value
 * @returns {number}
 */
function newtonToKelvin(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Temperature - Newton To Kelvin)`);
	};
	return (value / 0.33 + 273.15);
};
module.exports = newtonToKelvin;
