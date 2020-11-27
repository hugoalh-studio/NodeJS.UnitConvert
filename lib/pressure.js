/*==================
[NodeJS] Unit Convert - Pressure
	Language:
		NodeJS/10.13.0
==================*/
const barToPascal = require("./bar-pascal.js"),
	pascalToBar = require("./pascal-bar.js"),
	pascalToPSI = require("./pascal-psi.js"),
	pascalToStandardAtmosphere = require("./pascal-standardatmosphere.js"),
	pascalToTechnicalAtmosphere = require("./pascal-technicalatmosphere.js"),
	pascalToTorr = require("./pascal-torr.js"),
	psiToPascal = require("./psi-pascal.js"),
	standardatmosphereToPascal = require("./standardatmosphere-pascal.js"),
	technicalatmosphereToPascal = require("./technicalatmosphere-pascal.js"),
	torrToPascal = require("./torr-pascal.js");
module.exports = {
	AT_Pa: technicalatmosphereToPascal,
	ATM_Pa: standardatmosphereToPascal,
	Bar_Pa: barToPascal,
	barToPascal: barToPascal,
	Pa_AT: pascalToTechnicalAtmosphere,
	Pa_ATM: pascalToStandardAtmosphere,
	Pa_Bar: pascalToBar,
	Pa_PSI: pascalToPSI,
	Pa_Torr: pascalToTorr,
	pascalToBar: pascalToBar,
	pascalToPSI: pascalToPSI,
	pascalToStandardAtmosphere: pascalToStandardAtmosphere,
	pascalToTechnicalAtmosphere: pascalToTechnicalAtmosphere,
	pascalToTorr: pascalToTorr,
	PSI_Pa: psiToPascal,
	psiToPascal: psiToPascal,
	standardatmosphereToPascal: standardatmosphereToPascal,
	technicalatmosphereToPascal: technicalatmosphereToPascal,
	Torr_Pa: torrToPascal,
	torrToPascal: torrToPascal
};
