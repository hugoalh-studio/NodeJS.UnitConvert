/*==================
[NodeJS] Unit Convert - Pressure
	Language:
		NodeJS 14
==================*/
const barToPascal = require("./bar-pascal.js");
const pascalToBar = require("./pascal-bar.js");
const pascalToPSI = require("./pascal-psi.js");
const pascalToStandardAtmosphere = require("./pascal-standardatmosphere.js");
const pascalToTechnicalAtmosphere = require("./pascal-technicalatmosphere.js");
const pascalToTorr = require("./pascal-torr.js");
const psiToPascal = require("./psi-pascal.js");
const standardatmosphereToPascal = require("./standardatmosphere-pascal.js");
const technicalatmosphereToPascal = require("./technicalatmosphere-pascal.js");
const torrToPascal = require("./torr-pascal.js");
module.exports.AT_Pa = technicalatmosphereToPascal;
module.exports.ATM_Pa = standardatmosphereToPascal;
module.exports.Bar_Pa = barToPascal;
module.exports.barToPascal = barToPascal;
module.exports.Pa_AT = pascalToTechnicalAtmosphere;
module.exports.Pa_ATM = pascalToStandardAtmosphere;
module.exports.Pa_Bar = pascalToBar;
module.exports.Pa_PSI = pascalToPSI;
module.exports.Pa_Torr = pascalToTorr;
module.exports.pascalToBar = pascalToBar;
module.exports.pascalToPSI = pascalToPSI;
module.exports.pascalToStandardAtmosphere = pascalToStandardAtmosphere;
module.exports.pascalToTechnicalAtmosphere = pascalToTechnicalAtmosphere;
module.exports.pascalToTorr = pascalToTorr;
module.exports.PSI_Pa = psiToPascal;
module.exports.psiToPascal = psiToPascal;
module.exports.standardatmosphereToPascal = standardatmosphereToPascal;
module.exports.technicalatmosphereToPascal = technicalatmosphereToPascal;
module.exports.Torr_Pa = torrToPascal;
module.exports.torrToPascal = torrToPascal;
