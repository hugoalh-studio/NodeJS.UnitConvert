/*==================
[NodeJS] Unit Convert - Pressure - Pascal To Technical Atmosphere
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
/**
 * @function pascalToTechnicalAtmosphere
 * @param {number} value
 * @returns {number}
 */
function pascalToTechnicalAtmosphere(value) {
	return (
		(advancedDetermine.isNumber(value) == true) ? (value / 98066.5) : internalService.prefabTypeError("value", "number")
	);
};
module.exports = pascalToTechnicalAtmosphere;
