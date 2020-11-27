/*==================
[NodeJS] Unit Convert - Temperature - Rankine To Kelvin
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function rankineToKelvin
 * @param {number} value
 * @returns {number}
 */
function rankineToKelvin(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Temperature - Rankine To Kelvin)`);
	};
	return (value / 1.8);
};
module.exports = rankineToKelvin;
