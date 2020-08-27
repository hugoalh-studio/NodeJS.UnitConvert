/*==================
[NodeJS] Unit Convert - Weight - Class
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("../internalservice.js");
const moreArray = require("@hugoalh/more-array");
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
	"electron volt": "",
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
		if (advancedDetermine.isNumber(inputValue) != true) {
			internalService.prefabTypeError("inputValue", "number");
		};
		if (advancedDetermine.isString(inputUnit) != true) {
			internalService.prefabTypeError("inputUnit", "string");
		};
		inputUnit = weightUnitMap[inputUnit];
		if (typeof inputUnit != "string") {
			internalService.prefabReferenceError("inputUnit", "Unknown/Uncovered unit.");
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
		outputUnit = weightUnitMap[outputUnit];
		if (typeof outputUnit != "string") {
			return internalService.prefabReferenceError("outputUnit", "Unknown/Uncovered unit.");
		};
		return this[outputUnit.toLowerCase()];
	};
};
module.exports = Weight;
