var isProd = false;
var isRelax = true;

// Example of how to use a GET request for data
 
// function callback(result){
//   $("#main-content").append(result['prodURL']);
// }

function verifyProdURL(){

  //$.get("/data/", callback);


  var url = (document.getElementById("prod-url").value);
  isProd = true;
  isRelax = false;
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

function verifyRelaxURL(){
  var url = (document.getElementById("relax-url").value);
  isProd = false;
  isRelax = true;
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


var myHeaders = new Headers();
myHeaders.append('acess-token', 'BQCIszHKSV4JrjkQttdVLAytD-1AFKAU1pmR4P5BJ5ncWhaL9c3kc83NU2HgTUfMn-w2DYRZJ0SxfpjpD7aMX4xe-Q0jd7TBylPPBErryDOtym7i5xP-831V19pkUzRBxmEr2QPRWI4nfohBJK5SvtvNOgi8PZm8HA');

const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };


function getConfirmation() {
  if (isProd == true) {
    var url = (document.getElementById("prod-url").value);

  }
  else {
    var url = (document.getElementById("relax-url").value);
  }

  //url issues need to be addressed
  if (url.includes("spotify")) {
    token = url.split("playlist/")[1]
    if (token.includes("?si=")) {
      token = token.split("?si=")[0]
    }

    // const spotifyapi = "https://api.spotify.com/v1/playlists/" + token + '-H Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQDw1LxB5bAWuZ3U3n7IpBNKqILRA4n4HcX__FI0tJ1ujznhhmihhAMY23G8DrWAUnyBcT0bldEoRTRPFsWaDHaz5IBrAWl3pd7_LHaf8r4P9TBEIp2dj8V8OVoSdmzUIA-qUnlepDCTnpJRAPhkJpxfNw3Hr61K9g'
    // console.log(spotifyapi)

    // fetch(spotifyapi, myInit).then(
    //   data=>{return data.json()}).then(res=>{console.log(res)})

    // fetch(spotifyapi)
    //   .then(function(data) {
    //     console.log(data)
    //   })
    //
    //
    // }
    // var auth_url = "https://accounts.spotify.com/authorize"
    // auth_url += "?client_id=b4c291c0effb4b64bd6b961dc52fab74"
    // auth_url += "&response_type=token"
    // auth_url += "&redirect_uri=http://example.com"
    // console.log(auth_url)
    // fetch(auth_url, {
    //   method:'POST'
    // }).then(res => res.json())
    // .then(response => console.log("Success", JSON.stringify(response)))

    // fetch (auth_url, {
    //   method: 'POST',
    //   body: 'grant_type=client_credentials',
    //   headers: {
    //     'Content-Type' : 'application/x-www-form-urlencoded',
    //     'Authorization': "Basic b4c291c0effb4b64bd6b961dc52fab74:04a8dab3dc93464fa470ddf9f5b6e435",
    //     'Access-Control-Allow-Origin': '*'
    //   },
    //   mode: 'cors'
    // })    // }).then(res => res.json())
    // .then(response => console.log("Success", JSON.stringify(response)))

  }
  if (isProd == true) {
    var retVal = confirm("Is 'My Rad Study Beats' the correct playlist?");
  }
  else {
    var retVal = confirm("Is 'My Rad Relax Beats' the correct playlist?");
  }

  if( retVal == true ) {
    return true;
  } else {
    window.location.reload();
    return false;
  }
}


