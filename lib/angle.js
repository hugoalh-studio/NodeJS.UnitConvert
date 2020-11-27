/*==================
[NodeJS] Unit Convert - Angle
	Language:
		NodeJS/10.13.0
==================*/
const degreeToRadian = require("./degree-radian.js"),
	gradianToRadian = require("./gradian-radian.js"),
	radianToDegree = require("./radian-degree.js"),
	radianToGradian = require("./radian-gradian.js"),
	radianToTurn = require("./radian-turn.js"),
	turnToRadian = require("./turn-radian.js");
module.exports = {
	D_R: degreeToRadian,
	degreeToRadian: degreeToRadian,
	G_R: gradianToRadian,
	gradianToRadian: gradianToRadian,
	R_D: radianToDegree,
	R_G: radianToGradian,
	R_T: radianToTurn,
	radianToDegree: radianToDegree,
	radianToGradian: radianToGradian,
	radianToTurn: radianToTurn,
	T_R: turnToRadian,
	turnToRadian: turnToRadian
};
