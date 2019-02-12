function verifyURL(){
  console.log("HGFHF  ");
  var url = (document.getElementById("prod-url").value);
  // validation fails if the input is blank
  if(url == "") {
    alert("Error: Please enter a playlist URL!");
    return false;
  }

  // regular expression to match only alphanumeric characters and spaces
  var re = /^(http:|https:)\/\/.*$/m

  // validation fails if the input doesn't match our regular expression
  if(!re.test(url)) {
    alert("Error: Input a valid playlist URL");
    return false;
  }
  getConfirmation()  
}

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
    //
    // fetch(spotifyapi)
    //   .then(function(data) {
    //     console.log(data)
    //   })
    //
    //
    // }
  }



  var retVal = confirm("Is this the correct playlist?");
  if( retVal == true ) {
    return true;
  } else {
    window.location.reload();
    return false;
  }
}
