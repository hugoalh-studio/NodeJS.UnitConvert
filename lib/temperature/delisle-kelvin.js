/*==================
[NodeJS] Unit Convert - Temperature - Delisle To Kelvin
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function delisleToKelvin
 * @param {number} value
 * @returns {number}
 */
function delisleToKelvin(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Temperature - Delisle To Kelvin)`);
	};
	return (373.15 - value / 1.5);
};
module.exports = delisleToKelvin;
