/*==================
[NodeJS] Unit Convert - Pressure - Pascal To Standard Atmosphere
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function pascalToStandardAtmosphere
 * @param {number} value
 * @returns {number}
 */
function pascalToStandardAtmosphere(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value / 101325) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = pascalToStandardAtmosphere;
