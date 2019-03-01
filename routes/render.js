// Get all of our friend data
var data = require('../data.json');
var $ = require('jquery');
var param = require('jquery-param');
var fs = require('fs');


exports.viewLogin = function(request, response){
	console.log("hi im working uwu");
	response.render('login-page');
};

exports.viewWelcome = function(request, response){
	console.log("hi im working uwu");
	response.render('welcome-to-pomelody');
};

exports.viewInstructions = function(request, response){
	console.log("hi im working uwu");
	response.render('instructions', data);
};


exports.viewPrevSettings = function(request, response){
	console.log("hi im working uwu");
	response.render('prev-settings', data);
};

exports.viewSelectProd = function(request, response){
	console.log("hi im working uwu");
	response.render('select-productivity');
};
exports.viewSelectProd_B = function(request, response){
	console.log("hi im working uwu");
	response.render('select-productivity_B');
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
	console.log("Correctly inside viewSpotify call");
	var client_id = "b4c291c0effb4b64bd6b961dc52fab74"; // Your client id
	var client_secret = "";
	fs.readFile('not-secret-key.txt', (err, data) => {
							  if (err) throw err;
							  console.log(data);
							  client_secret = data
							}); // Your secret
	var redirect_uri = 'welcome'; // Your redirect uri

	var code = request.query.code;
    var body = {
    	grant_type: "authorization_code",
    	code: code,
    	redirect_uri: "http://localhost:3000/welcome"
    }
    paramed_body = param(body);
    var details = 	{
		method: 'POST',
		data: paramed_body,
		headers: {
			'Content-Type' : 'application/x-www-form-urlencoded',
			'Authorization': "Basic "+client_id+":"+client_secret,
		}
	}
	$.ajax('https://accounts.spotify.com/api/token', details);



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
