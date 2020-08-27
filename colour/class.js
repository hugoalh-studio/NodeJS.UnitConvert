/*==================
[NodeJS] Unit Convert - Colour - Class
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
const moreArray = require("@hugoalh/more-array");
/**
 * @private
 * @const {object} colourUnitMap
 */
const colourUnitMap = {
	"ANSI": "ANSI",
	"ANSI16": "ANSI16",
	"CMY": "CMY",
	"CMYK": "CMYK",
	"HEX": "HEX",
	"HSB": "HSV",
	"HSL": "HSL",
	"HSV": "HSV",
	"HWB": "HWB",
	"Integer": "Integer",
	"LAB": "LAB",
	"RGB": "RGB",
	"XYZ": "XYZ"
};
/**
 * @private
 * @const {string[]} colourUnitList
 */
const colourUnitList = moreArray.removeDuplicate(Object.values(colourUnitMap));
class Colour {
	/**
	 * @constructor
	 * @param {number[]} inputValue
	 * @param {string} [inputUnit="CMYK"]
	 */
	constructor(inputValue, inputUnit = "CMYK") {
		if (advancedDetermine.isArray(inputValue) != true) {
			internalService.prefabTypeError("inputValue", "array");
		};
		if (advancedDetermine.isString(inputUnit) != true) {
			internalService.prefabTypeError("inputUnit", "string");
		};
		if (colourUnitList.includes(inputUnit) == false) {
			internalService.prefabReferenceError("inputUnit", "Unknown/Uncovered unit.");
		};
		if (inputUnit === "CMYK") {
			this.cmyk = inputValue;
		} else {
			this[inputUnit.toLowerCase()] = inputValue;
			this.cmyk = require(`./${inputUnit.toLowerCase()}-cmyk.js`)(inputValue);
		};
		colourUnitList.forEach((element) => {
			if (element !== "CMYK" && element !== inputUnit) {
				this[element.toLowerCase()] = require(`./cmyk-${element.toLowerCase()}.js`)(this.cmyk);
			};
		});
	};
	/**
	 * @method
	 * @param {string} [outputUnit="CMYK"]
	 * @returns {number}
	 */
	to(outputUnit = "CMYK") {
		if (advancedDetermine.isString(outputUnit) != true) {
			internalService.prefabTypeError("outputUnit", "string");
		};
		if (colourUnitList.includes(outputUnit) == false) {
			return internalService.prefabReferenceError("outputUnit", "Unknown/Uncovered unit.");
		};
		return this[outputUnit.toLowerCase()];
	};
};
module.exports = Colour;
