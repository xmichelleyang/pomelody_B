// Example of how to use a GET request for data

// function callback(result){
//   $("#main-content").append(result['prodURL']);
// }

function verifyProdURL(){
  var url = (document.getElementById("prod-url").value);
  // isProd = true;
  // isRelax = false;
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
  getConfirmation(url, "prod");
}


function verifyRelaxURL(){
  var url = (document.getElementById("relax-url").value);
  // isProd = false;
  // isRelax = true;
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
  getConfirmation(url, "relax");
}


function verifyURL(input, type){

  var url = input;
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
  getConfirmation(url, type);
}


var myHeaders = new Headers();
myHeaders.append('acess-token', 'BQCIszHKSV4JrjkQttdVLAytD-1AFKAU1pmR4P5BJ5ncWhaL9c3kc83NU2HgTUfMn-w2DYRZJ0SxfpjpD7aMX4xe-Q0jd7TBylPPBErryDOtym7i5xP-831V19pkUzRBxmEr2QPRWI4nfohBJK5SvtvNOgi8PZm8HA');

const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

async function getConfirmation(url, type) {

  // Type == Prod or Relax
  if (type == undefined) {
    type = whichPage()
  }


  var playlist_id = url.split("playlist/")[1];
  var playlist_name = await $.get("/playlistInfo/" + playlist_id);
  console.log(playlist_name);
  // Ask user to confirm playlist //TODO: This can just be one confirm later with + name
  var retVal = false;
  if (type == "prod") {
    retVal = confirm("Is 'My Rad Study Beats' the correct playlist?");
  }
  else {
    retVal = confirm("Is 'My Rad Relax Beats' the correct playlist?");
  }

  // If user says yes, update the value
  if(retVal == true ) {
    // Update the specific value
    if (type == "prod") {
      localStorage.setItem('prod_url', url);
      console.log("updated prod", url);
      document.getElementById('choose-prod').style.display = "none";
      document.getElementById('confirmed-playlist-prod').innerHTML = 'My Study Beats';
      document.getElementById('resetBtn').style.display = 'block';



    }
    else if (type == "relax") {
      localStorage.setItem('relax_url', url);
      console.log("updated relax", url);
      document.getElementById('choose-relax').style.display = "none";
      document.getElementById('confirmed-playlist-relax').innerHTML = 'My Relax Beats';
      document.getElementById('resetBtn').style.display = 'block';

    }

  }




  // } else {
  //   window.location.reload();
  //   return false;
  // }
}


const handleProdSubmit = event => {
  // Stop the form from submitting since we’re handling that with AJAX.
  event.preventDefault();
  console.log("Insidehandle prod submit")

  // TODO: Call our function to get the form data.
  const data = {};

  // Demo only: print the form data onscreen as a formatted JSON object.
  const dataContainer = document.getElementById("productivity-form")[0];

  // Use `JSON.stringify()` to make the output valid, human-readable JSON.
  dataContainer.textContent = JSON.stringify(data, null, "  ");

  console.log(dataContainer)

  // ...this is where we’d actually do something with the form data...
};



async function genJSON(){
  var prod_url = localStorage.getItem('prod_url');
  var prodName = "";
  var prod_time = localStorage.getItem('prod_time');
  var relax_url = localStorage.getItem('relax_url');
  var relaxName = "";
  var relax_time = localStorage.getItem('relax_time');

  var dict = {
    "prodURL": prod_url,
    "prodName": prodName,
    "prodTime": prod_time,
    "relaxURL": relax_url,
    "relaxName": relaxName,
    "relaxTime": relax_time,
  };

  console.log(dict);
  console.log("im in genjson");
  $.post('/saveJSON', dict, function(result) {
    console.log("literally anythitng");
    navigateToStart();
  });


}

function navigateToStart(){
  console.log("About to nav");
      window.location.href = 'you-can-do-it';

}

function updateProdTimeVal(val){
  localStorage.setItem('prod_time', val);
  prod_time = val;
}


function updateRelaxTimeVal(val){
  localStorage.setItem('relax_time', val);
  console.log("Updated relax time to ", localStorage.getItem('relax_time'));
  relax_time = val;
}

// Stop form from appending onto URL
$("form").submit(function() { return false; });



function whichPage(){
  if ((document.URL).includes("you-can-do-it"))  {
    return "relax"
  }
  else if ((document.URL).includes("treat-yourself")){
    return "prod"
  }
  else {
    return "prev"
  }
}
