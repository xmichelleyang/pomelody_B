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

exports.viewSpotify = function(request, response) {
	var client_id = 'b4c291c0effb4b64bd6b961dc52fab74'; // Your client id
	var client_secret = 'e0d782e1d734465c96e5a8b3c602a9d1'; // Your secret
	var redirect_uri = 'welcome'; // Your redirect uri


	//var state = generateRandomString(16);
	//res.cookie(stateKey, state);

	// your application requests authorization
	/*
	var scope = 'user-read-private user-read-email';
	response.redirect('https://accounts.spotify.com/authorize?' +
	querystring.stringify({
	  response_type: 'code',
	  client_id: client_id,
	  scope: scope,
	  redirect_uri: redirect_uri,
	  state: state
	}));
	*/


}
