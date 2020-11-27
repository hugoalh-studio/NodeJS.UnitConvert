/*==================
[NodeJS] Unit Convert - Weight - Class
	Language:
		NodeJS/10.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine"),
	moreArray = require("@hugoalh/more-array");
/**
 * @private
 * @const {object} weightUnitMap
 */
const weightUnitMap = {
	"kg": "",
	"㎏": "",
	"Kilogram": "",
	"kilogram": "",
	"g": "",
	"Gram": "",
	"gram": "",
	"t": "",
	"Tonne": "",
	"tonne": "",
	"T": "",
	"Mg": "",
	"Megagram": "",
	"megagram": "",
	"斤": "",
	"catty": "",
	"Catty": "",
	"lb": "",
	"Pound": "",
	"pound": "",
	"兩": "",
	"Tael": "",
	"tael": "",
	"錢": "",
	"Mace": "",
	"mace": "",
	"oz": "",
	"OZ": "",
	"Ounce": "",
	"ounce": "",
	"eV": "",
	"Electron Volt": "",
	"electron volt": ""
};
/**
 * @private
 * @const {string[]} weightUnitList
 */
const weightUnitList = moreArray.removeDuplicate(Object.values(weightUnitMap));
class Weight {
	/**
	 * @constructor
	 * @param {number} inputValue
	 * @param {string} [inputUnit="Kilogram"]
	 */
	constructor(inputValue, inputUnit = "Kilogram") {
		if (advancedDetermine.isNumber(inputValue) !== true) {
			throw new TypeError(`Argument "inputValue" must be type of number! ([NodeJS] Unit Convert - Weight - Class)`);
		};
		if (advancedDetermine.isString(inputUnit) !== true) {
			throw new TypeError(`Argument "inputUnit" must be type of string (non-nullable)! ([NodeJS] Unit Convert - Weight - Class)`);
		};
		inputUnit = weightUnitMap[inputUnit];
		if (typeof inputUnit !== "string") {
			throw new RangeError(`Argument "inputUnit"'s value is invalid/uncovered/unknown! ([NodeJS] Unit Convert - Weight - Class)`);
		};
		if (inputUnit === "Kilogram") {
			this.kilogram = inputValue;
		} else {
			this[inputUnit.toLowerCase()] = inputValue;
			this.kilogram = require(`./${inputUnit.toLowerCase()}-kilogram.js`)(inputValue);
		};
		weightUnitList.forEach((element) => {
			if (element !== "Kilogram" && element !== inputUnit) {
				this[element.toLowerCase()] = require(`./kilogram-${element.toLowerCase()}.js`)(this.kilogram);
			};
		});
	};
	/**
	 * @method
	 * @param {string} [outputUnit="Kilogram"]
	 * @returns {number}
	 */
	to(outputUnit = "Kilogram") {
		if (advancedDetermine.isString(outputUnit) !== true) {
			throw new TypeError(`Argument "outputUnit" must be type of string (non-nullable)! ([NodeJS] Unit Convert - Weight - Class)`);
		};
		outputUnit = weightUnitMap[outputUnit];
		if (typeof outputUnit !== "string") {
			throw new RangeError(`Argument "outputUnit"'s value is invalid/uncovered/unknown! ([NodeJS] Unit Convert - Weight - Class)`);
		};
		return this[outputUnit.toLowerCase()];
	};
};
module.exports = Weight;
