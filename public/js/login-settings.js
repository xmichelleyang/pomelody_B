function validateForm() {
  console.log('I am inside validate form');
  var user = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log(user);
  console.log(password);
  if (user == "" || password == "") {
    alert("Please enter a username and password.");
    return false;
  }
  else { 
  	window.location.href = 'welcome';
  }
}