const param = require('jquery-param');
const axios = require('axios');


var accessToken, refreshToken;

exports.setAccessInfo = function(new_access_token, refresh_token) {
  accessToken = new_access_token
  refreshToken = refresh_token
  console.log("Correctly setting access token to ", accessToken);

  // Refresh token in an hour
  setInterval(genNewToken, 60*60*1000 - 60*1000);
}

function getAccessInfo(){
  return [accessToken, refreshToken]
}

function genNewToken(){
  console.log("inside gen new token");
  const client_id = "b4c291c0effb4b64bd6b961dc52fab74"; // Your client id
  const client_secret = "e0d782e1d734465c96e5a8b3c602a9d1";
  // Set up body to be parametized
  var body = {
		grant_type: "refresh_token",
		refresh_token: refreshToken
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
  // Set post request
  axios.request(details).then(function(response) {
		console.log("The response we recieved was", response.data);
		access_token = response.data.access_token
    refresh_token = response.data.refresh_token
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
			console.log("request", error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('Error', error.message);
		}
		console.log(error.config);
	});

}


exports.getPlaylistName = function(request, response){

  var id = request.params.id;
  var details = 	{
    url: "https://api.spotify.com/v1/playlists/" + id,
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' +  getAccessInfo()[0] }
  }

  axios.request(details).then(function(res) {
    console.log("playlist name is", res.data.name);
    var name = res.data.name;
    response.send(name);
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



};
