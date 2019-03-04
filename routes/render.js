// Get all of our friend data
var data = require('../data.json');
var $ = require('jquery');
var param = require('jquery-param');
var fs = require('fs');
const axios = require('axios');



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

exports.getSpotifyToken = function(request, response) {
	console.log("Correctly inside viewSpotify call");
	var client_id = "b4c291c0effb4b64bd6b961dc52fab74"; // Your client id
	var client_secret = "e0d782e1d734465c96e5a8b3c602a9d1";
	// fs.readFile('not-secret-key.txt', (err, data) => {
	// 						  if (err) throw err;
	// 						  console.log(data);
	// 						  client_secret = data
	// 						}); // Your secret

	// The code we get back from Spotify
	var code = request.query.code;
	// Body object to be parametized for details
	var body = {
		grant_type: "authorization_code",
		code: code,
		redirect_uri: "http://localhost:3000/spotifyLogin"
	}
	paramed_body = param(body);
	// The configuration for the post request
	var details = 	{
		url: 'https://accounts.spotify.com/api/token',
		method: 'POST',
		data: paramed_body,
		headers: {
			'Content-Type' : 'application/x-www-form-urlencoded',
			'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
		}
	}
	axios.request(details).then(function(response) {
		console.log("The response we recieved was", response.data)

		// This is the same as var access_token = response.data.access_token
		const {access_token, refresh_token} = response.data

	}).catch( function (error) {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			console.log("data", error.response.data);
			console.log("status", error.response.status);
			console.log("headers", error.response.headers);
		} else if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			// http.ClientRequest in node.js
			console.log(error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('Error', error.message);
		}
		console.log(error.config);
	});


}
