/*==================
[NodeJS] Unit Convert - Angle
	Language:
		NodeJS 14
==================*/
const degreeToRadian = require("./degree-radian.js");
const gradianToRadian = require("./gradian-radian.js");
const radianToDegree = require("./radian-degree.js");
const radianToGradian = require("./radian-gradian.js");
const radianToTurn = require("./radian-turn.js");
const turnToRadian = require("./turn-radian.js");
module.exports.D_R = degreeToRadian;
module.exports.degreeToRadian = degreeToRadian;
module.exports.G_R = gradianToRadian;
module.exports.gradianToRadian = gradianToRadian;
module.exports.R_D = radianToDegree;
module.exports.R_G = radianToGradian;
module.exports.R_T = radianToTurn;
module.exports.radianToDegree = radianToDegree;
module.exports.radianToGradian = radianToGradian;
module.exports.radianToTurn = radianToTurn;
module.exports.T_R = turnToRadian;
module.exports.turnToRadian = turnToRadian;
