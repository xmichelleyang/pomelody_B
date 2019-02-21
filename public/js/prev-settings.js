
function editProdPlaylist(){
	var change = prompt('What would you like to change your productivity playlist to?');
	verifyURL(change, "prod");
}

function editProdTime(){
	var change = prompt('What would you like to change your productivity time interval to?');
	// Verify its just a number 
	while (isNaN(change)) {
        alert("Please enter a valid numerical value");
        change = prompt("Please enter your desired time");
    }
    // Update value on JSON and page
	updateProdTimeVal(change + " min");
	$('#prodTimeInfo').text(change);
}

function editRelaxPlaylist(){
	var change = prompt('What would you like to change your relaxation playlist to?');
	verifyURL(change, "relax");

}

function editRelaxTime(){
	var change = prompt('What would you like to change your relaxation playlist to?');
	// Verify its just a number 
	while (isNaN(change)) {
        alert("Please enter a valid numerical value");
        change = prompt("Please enter your desired time");
    }
    // Update value on JSON and page
	updateRelaxTimeVal(change + " min");
	$('#relaxTimeInfo').text(change + " min");
}