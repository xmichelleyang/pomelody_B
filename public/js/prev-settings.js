
function editProdPlaylist(){
	var change = prompt('What would you like to change your productivity playlist to?');
	// If user presses cancel
	if (change == null) {
    	return
    }
	verifyURL(change, "prod");
}

function editProdTime(){
	var change = prompt('What would you like to change your productivity time interval to?');
	// If user presses cancel
	if (change == null) {
    	return
    }
	// Verify its just a number 
	while (isNaN(change)) {
        alert("Please enter a valid numerical value");
        change = prompt("Please enter your desired time");
    }
    // Update value on JSON and page
	updateProdTimeVal(change);
	$('#prodTimeInfo').text(change + " min");
}

function editRelaxPlaylist(){
	var change = prompt('What would you like to change your relaxation playlist to?');
	// If user presses cancel
	if (change == null) {
    	return
    }
	verifyURL(change, "relax");

}

function editRelaxTime(){
	var change = prompt('What would you like to change your relaxation playlist to?');
	// If user presses cancel
    if (change == null) {
    	return
    }

	// Verify its just a number 
	while (isNaN(change)) {
        alert("Please enter a valid numerical value");
        change = prompt("Please enter your desired time");
    }
    // Update value on JSON and page
    console.log("changed value to ", change);
	updateRelaxTimeVal(change);
	$('#relaxTimeInfo').text(change + " min");
}