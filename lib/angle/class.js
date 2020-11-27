/*==================
[NodeJS] Unit Convert - Angle - Class
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine"),
	moreArray = require("@hugoalh/more-array");
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
		if (advancedDetermine.isNumber(inputValue) !== true) {
			throw new TypeError(`Argument "inputValue" must be type of number! ([NodeJS] Unit Convert - Angle - Class)`);
		};
		if (advancedDetermine.isString(inputUnit) !== true) {
			throw new TypeError(`Argument "inputUnit" must be type of string (non-nullable)! ([NodeJS] Unit Convert - Angle - Class)`);
		};
		inputUnit = angleUnitMap[inputUnit];
		if (typeof inputUnit !== "string") {
			throw new RangeError(`Argument "inputUnit"'s value is invalid/uncovered/unknown! ([NodeJS] Unit Convert - Angle - Class)`);
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
		if (advancedDetermine.isString(outputUnit) !== true) {
			throw new TypeError(`Argument "outputUnit" must be type of string (non-nullable)! ([NodeJS] Unit Convert - Angle - Class)`);
		};
		outputUnit = angleUnitMap[outputUnit];
		if (typeof outputUnit !== "string") {
			throw new RangeError(`Argument "outputUnit"'s value is invalid/uncovered/unknown! ([NodeJS] Unit Convert - Angle - Class)`);
		};
		return this[outputUnit.toLowerCase()];
	};
};
module.exports = Angle;
