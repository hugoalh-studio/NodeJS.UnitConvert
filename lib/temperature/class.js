/*==================
[NodeJS] Unit Convert - Temperature - Class
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine"),
	moreArray = require("@hugoalh/more-array");
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
		if (advancedDetermine.isNumber(inputValue) !== true) {
			throw new TypeError(`Argument "inputValue" must be type of number! ([NodeJS] Unit Convert - Temperature - Class)`);
		};
		if (advancedDetermine.isString(inputUnit) !== true) {
			throw new TypeError(`Argument "inputUnit" must be type of string (non-nullable)! ([NodeJS] Unit Convert - Temperature - Class)`);
		};
		inputUnit = temperatureUnitMap[inputUnit];
		if (typeof inputUnit !== "string") {
			throw new RangeError(`Argument "inputUnit"'s value is invalid/uncovered/unknown! ([NodeJS] Unit Convert - Temperature - Class)`);
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
		if (advancedDetermine.isString(outputUnit) !== true) {
			throw new TypeError(`Argument "outputUnit" must be type of string (non-nullable)! ([NodeJS] Unit Convert - Temperature - Class)`);
		};
		outputUnit = temperatureUnitMap[outputUnit];
		if (typeof outputUnit !== "string") {
			throw new RangeError(`Argument "outputUnit"'s value is invalid/uncovered/unknown! ([NodeJS] Unit Convert - Temperature - Class)`);
		};
		return this[outputUnit.toLowerCase()];
	};
};
module.exports = Temperature;
