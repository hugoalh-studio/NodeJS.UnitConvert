/*==================
[NodeJS] Unit Convert - Temperature - Kelvin To Rankine
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function kelvinToRankine
 * @param {number} value
 * @returns {number}
 */
function kelvinToRankine(value) {
	if (advancedDetermine.isNumber(value) !== true) {
		throw new TypeError(`Argument "value" must be type of number! ([NodeJS] Unit Convert - Temperature - Kelvin To Rankine)`);
	};
	return (value * 1.8);
};
module.exports = kelvinToRankine;
