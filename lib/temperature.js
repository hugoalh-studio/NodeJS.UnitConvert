/*==================
[NodeJS] Unit Convert - Temperature
	Language:
		NodeJS/10.13.0
==================*/
const celsiusToKelvin = require("./celsius-kelvin.js"),
	delisleToKelvin = require("./delisle-kelvin.js"),
	fahrenheitToKelvin = require("./fahrenheit-kelvin.js"),
	kelvinToCelsius = require("./kelvin-celsius.js"),
	kelvinToDelisle = require("./kelvin-delisle.js"),
	kelvinToFahrenheit = require("./kelvin-fahrenheit.js"),
	kelvinToNewton = require("./kelvin-newton.js"),
	kelvinToRankine = require("./kelvin-rankine.js"),
	kelvinToReaumur = require("./kelvin-reaumur.js"),
	kelvinToRomer = require("./kelvin-romer.js"),
	newtonToKelvin = require("./newton-kelvin.js"),
	rankineToKelvin = require("./rankine-kelvin.js"),
	reaumurToKelvin = require("./reaumur-kelvin.js"),
	romerToKelvin = require("./romer-kelvin.js");
module.exports = {
	C_K: celsiusToKelvin,
	celsiusToKelvin: celsiusToKelvin,
	De_K: delisleToKelvin,
	delisleToKelvin: delisleToKelvin,
	F_K: fahrenheitToKelvin,
	fahrenheitToKelvin: fahrenheitToKelvin,
	K_C: kelvinToCelsius,
	K_De: kelvinToDelisle,
	K_F: kelvinToFahrenheit,
	K_N: kelvinToNewton,
	K_Ra: kelvinToRankine,
	K_Re: kelvinToReaumur,
	K_Ro: kelvinToRomer,
	kelvinToCelsius: kelvinToCelsius,
	kelvinToDelisle: kelvinToDelisle,
	kelvinToFahrenheit: kelvinToFahrenheit,
	kelvinToNewton: kelvinToNewton,
	kelvinToRankine: kelvinToRankine,
	kelvinToReaumur: kelvinToReaumur,
	kelvinToRomer: kelvinToRomer,
	N_K: newtonToKelvin,
	newtonToKelvin: newtonToKelvin,
	Ra_K: rankineToKelvin,
	rankineToKelvin: rankineToKelvin,
	Re_K: reaumurToKelvin,
	reaumurToKelvin: reaumurToKelvin,
	Ro_K: romerToKelvin,
	romerToKelvin: romerToKelvin
};
