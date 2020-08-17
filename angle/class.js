/*==================
[NodeJS] Unit Convert - Angle - Class
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
const moreArray = require("@hugoalh/more-array");
/**
 * @private
 * @const {object} angleUnitMap
 */
const angleUnitMap = {
	"°": "Degree",
	"D": "Degree",
	"DEG": "Degree",
	"degree": "Degree",
	"Degree": "Degree",
	"g": "Gradian",
	"G": "Gradian",
	"ᵍ": "Gradian",
	"gon": "Gradian",
	"grad": "Gradian",
	"grade": "Gradian",
	"gradian": "Gradian",
	"Gradian": "Gradian",
	"pla": "Turn",
	"R": "Radian",
	"rad": "Radian",
	"RAD": "Radian",
	"radian": "Radian",
	"Radian": "Radian",
	"T": "Turn",
	"tr": "Turn",
	"turn": "Turn",
	"Turn": "Turn"
};
/**
 * @private
 * @const {string[]} angleUnitList
 */
const angleUnitList = moreArray.removeDuplicate(Object.values(angleUnitMap));
class Angle {
	/**
	 * @constructor
	 * @param {number} inputValue
	 * @param {string} [inputUnit="Radian"]
	 */
	constructor(inputValue, inputUnit = "Radian") {
		if (advancedDetermine.isNumber(inputValue) != true) {
			internalService.prefabTypeError("inputValue", "number");
		};
		if (advancedDetermine.isString(inputUnit) != true) {
			internalService.prefabTypeError("inputUnit", "string");
		};
		inputUnit = angleUnitMap[inputUnit];
		if (typeof inputUnit != "string") {
			internalService.prefabReferenceError("inputUnit", "Unknown/Uncovered unit.");
		};
		if (inputUnit === "Radian") {
			this.radian = inputValue;
		} else {
			this[inputUnit.toLowerCase()] = inputValue;
			this.radian = require(`./${inputUnit.toLowerCase()}-radian.js`)(inputValue);
		};
		angleUnitList.forEach((element) => {
			if (element !== "Radian" && element !== inputUnit) {
				this[element.toLowerCase()] = require(`./radian-${element.toLowerCase()}.js`)(this.radian);
			};
		});
	};
	/**
	 * @method
	 * @param {string} [outputUnit="Radian"]
	 * @returns {number}
	 */
	to(outputUnit = "Radian") {
		outputUnit = angleUnitMap[outputUnit];
		if (typeof outputUnit != "string") {
			return internalService.prefabReferenceError("outputUnit", "Unknown/Uncovered unit.");
		};
		return this[outputUnit.toLowerCase()];
	};
};
module.exports = Angle;
