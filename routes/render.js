// Get all of our friend data
var data = require('../data.json');

exports.viewLogin = function(request, response){
	console.log("hi im working uwu");
	response.render('login-page');
};

exports.viewWelcome = function(request, response){
	console.log("hi im working uwu");
	response.render('welcome-to-pomelody');
};

exports.viewPrevSettings = function(request, response){
	console.log("hi im working uwu");
	response.render('prev-settings', data); 
};

exports.viewSelectProd = function(request, response){
	console.log("hi im working uwu");
	response.render('select-productivity');
};

exports.viewSelectIntervalProd = function(request, response){
	console.log("hi im working uwu");
	response.render('select-interval-of-time-prod');
};

exports.viewSelectRelax = function(request, response){
	console.log("hi im working uwu");
	response.render('select-relaxation');
};

exports.viewSelectIntervalRelax = function(request, response){
	console.log("hi im working uwu");
	response.render('select-interval-of-time-relax');
};

exports.viewSelectInterval = function(request, response){
	console.log("hi im working uwu");
	response.render('select-interval-of-time');
};

exports.viewYouCan = function(request, response){
	console.log("hi im working uwu");
	response.render('you-can-do-it', data);
};

exports.viewTreatYourself = function(request, response){
	console.log("hi im working uwu");
	response.render('treat-yourself', data);
};
exports.viewHelpScreen = function(request, response){
	console.log("hi im working uwu");
	response.render('help-screen');
};

exports.viewEnd = function(request, response){
	console.log("hi im working uwu");
	response.render('end-page');
};

