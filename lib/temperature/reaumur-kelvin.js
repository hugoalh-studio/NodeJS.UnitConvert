/*==================
[NodeJS] Unit Convert - Temperature - Reaumur To Kelvin
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function reaumurToKelvin
 * @param {number} value
 * @returns {number}
 */
function reaumurToKelvin(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Temperature - Reaumur To Kelvin)`);
	};
	return (value * 1.25 + 273.15);
};
module.exports = reaumurToKelvin;
