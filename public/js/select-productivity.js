
function getConfirmation() {
  var url = (document.getElementById("prod-url").value);
  //url issues need to be addressed
  if (url.includes("spotify")) {
    token = url.split("playlist/")[1]
    if (token.includes("?si=")) {
      token = token.split("?si=")[0]
    }

    const spotifyapi = "https://api.spotify.com/v1/playlists/" + token
    console.log(spotifyapi)
    {
      "access_token": "NgCXRKc...MzYjw",
      "token_type": "bearer",
      "expires_in": 3600,
    }
    fetch(spotifyapi)
      .then(function(data) {
        console.log(data)
      })


    }



  var retVal = confirm("Is this the correct playlist?");
  if( retVal == true ) {
    return true;
  } else {
    window.location.reload();
    return false;
  }
}
