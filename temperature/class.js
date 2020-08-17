/*==================
[NodeJS] Unit Convert - Temperature - Class
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
const moreArray = require("@hugoalh/more-array");
/**
 * @private
 * @const {object} temperatureUnitMap
 */
const temperatureUnitMap = {
	"°C": "Celsius",
	"℃": "Celsius",
	"°De": "Delisle",
	"°F": "Fahrenheit",
	"℉": "Fahrenheit",
	"°N": "Newton",
	"°R": "Rankine",
	"°Ré": "Reaumur",
	"°Re": "Reaumur",
	"°Ro": "Romer",
	"°Rø": "Romer",
	"C": "Celsius",
	"celsius": "Celsius",
	"Celsius": "Celsius",
	"De": "Delisle",
	"delisle": "Delisle",
	"Delisle": "Delisle",
	"F": "Fahrenheit",
	"fahrenheit": "Fahrenheit",
	"Fahrenheit": "Fahrenheit",
	"K": "Kelvin",
	"Kelvin": "Kelvin",
	"N": "Newton",
	"newton": "Newton",
	"Newton": "Newton",
	"R": "Rankine",
	"rankine": "Rankine",
	"Rankine": "Rankine",
	"Ré": "Reaumur",
	"Re": "Reaumur",
	"réaumur": "Reaumur",
	"Réaumur": "Reaumur",
	"reaumur": "Reaumur",
	"Reaumur": "Reaumur",
	"Ro": "Romer",
	"Rø": "Romer",
	"rømer": "Romer",
	"Rømer": "Romer",
	"romer": "Romer",
	"Romer": "Romer"
};
/**
 * @private
 * @const {string[]} temperatureUnitList
 */
const temperatureUnitList = moreArray.removeDuplicate(Object.values(temperatureUnitMap));
class Temperature {
	/**
	 * @constructor
	 * @param {number} inputValue
	 * @param {string} [inputUnit="Kelvin"]
	 */
	constructor(inputValue, inputUnit = "Kelvin") {
		if (advancedDetermine.isNumber(inputValue) != true) {
			internalService.prefabTypeError("inputValue", "number");
		};
		if (advancedDetermine.isString(inputUnit) != true) {
			internalService.prefabTypeError("inputUnit", "string");
		};
		inputUnit = temperatureUnitMap[inputUnit];
		if (typeof inputUnit != "string") {
			internalService.prefabReferenceError("inputUnit", "Unknown/Uncovered unit.");
		};
		if (inputUnit === "Kelvin") {
			this.kelvin = inputValue;
		} else {
			this[inputUnit.toLowerCase()] = inputValue;
			this.kelvin = require(`./${inputUnit.toLowerCase()}-kelvin.js`)(inputValue);
		};
		temperatureUnitList.forEach((element) => {
			if (element !== "Kelvin" && element !== inputUnit) {
				this[element.toLowerCase()] = require(`./kelvin-${element.toLowerCase()}.js`)(this.kelvin);
			};
		});
	};
	/**
	 * @method
	 * @param {string} [outputUnit="Kelvin"]
	 * @returns {number}
	 */
	to(outputUnit = "Kelvin") {
		outputUnit = temperatureUnitMap[outputUnit];
		if (typeof outputUnit != "string") {
			return internalService.prefabReferenceError("outputUnit", "Unknown/Uncovered unit.");
		};
		return this[outputUnit.toLowerCase()];
	};
};
module.exports = Temperature;
