/*==================
[NodeJS] Unit Convert
	Language:
		NodeJS/10.13.0
==================*/
/**
 * @const {string} version
 */
const version = "1.0.0";

module.exports = {
	angle: require("./angle.js"),
	Angle: require("./angle/class.js"),
	pressure: require("./pressure.js"),
	Pressure: require("./pressure/class.js"),
	temperature: require("./temperature.js"),
	Temperature: require("./temperature/class.js"),
	v: version,
	ver: version,
	version: version
};
