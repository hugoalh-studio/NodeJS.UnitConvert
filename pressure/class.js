/*==================
[NodeJS] Unit Convert - Pressure - Class
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
const moreArray = require("@hugoalh/more-array");
/**
 * @private
 * @const {object} pressureUnitMap
 */
const pressureUnitMap = {
	"at": "TechnicalAtmosphere",
	"AT": "TechnicalAtmosphere",
	"atm": "StandardAtmosphere",
	"ATM": "StandardAtmosphere",
	"atmosphere": "StandardAtmosphere",
	"Atmosphere": "StandardAtmosphere",
	"ba": "Bar",
	"Ba": "Bar",
	"bar": "Bar",
	"Bar": "Bar",
	"pa": "Pascal",
	"Pa": "Pascal",
	"pascal": "Pascal",
	"Pascal": "Pascal",
	"psi": "PSI",
	"PSI": "PSI",
	"standard atmosphere": "StandardAtmosphere",
	"Standard Atmosphere": "StandardAtmosphere",
	"technical atmosphere": "TechnicalAtmosphere",
	"Technical Atmosphere": "TechnicalAtmosphere",
	"torr": "Torr",
	"Torr": "Torr"
};
/**
 * @private
 * @const {string[]} pressureUnitList
 */
const pressureUnitList = moreArray.removeDuplicate(Object.values(pressureUnitMap));
class Pressure {
	/**
	 * @constructor
	 * @param {number} inputValue
	 * @param {string} [inputUnit="Pascal"]
	 */
	constructor(inputValue, inputUnit = "Pascal") {
		if (advancedDetermine.isNumber(inputValue) != true) {
			internalService.prefabTypeError("inputValue", "number");
		};
		if (advancedDetermine.isString(inputUnit) != true) {
			internalService.prefabTypeError("inputUnit", "string");
		};
		inputUnit = pressureUnitMap[inputUnit];
		if (typeof inputUnit != "string") {
			internalService.prefabReferenceError("inputUnit", "Unknown/Uncovered unit.");
		};
		if (inputUnit === "Pascal") {
			this.pascal = inputValue;
		} else {
			this[inputUnit.toLowerCase()] = inputValue;
			this.pascal = require(`./${inputUnit.toLowerCase()}-pascal.js`)(inputValue);
		};
		pressureUnitList.forEach((element) => {
			if (element !== "Pascal" && element !== inputUnit) {
				this[element.toLowerCase()] = require(`./pascal-${element.toLowerCase()}.js`)(this.pascal);
			};
		});
	};
	/**
	 * @method
	 * @param {string} [outputUnit="Pascal"]
	 * @returns {number}
	 */
	to(outputUnit = "Pascal") {
		outputUnit = pressureUnitMap[outputUnit];
		if (typeof outputUnit != "string") {
			return internalService.prefabReferenceError("outputUnit", "Unknown/Uncovered unit.");
		};
		return this[outputUnit.toLowerCase()];
	};
};
module.exports = Pressure;
