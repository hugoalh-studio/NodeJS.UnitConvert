/*==================
[NodeJS] Unit Convert - Pressure - Pascal To Bar
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function pascalToBar
 * @param {number} value
 * @returns {number}
 */
function pascalToBar(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value / 1e5) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = pascalToBar;
