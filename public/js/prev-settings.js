
function editProdPlaylist(){
	var change = prompt('What would you like to change your productivity playlist to?');
	verifyURL(change, "prod");
}

function editProdTime(){
	var change = prompt('What would you like to change your productivity time interval to?');
	updateProdTimeVal(change);
	$('#prodTimeInfo').text = "343";
}

function editRelaxPlaylist(){
	var change = prompt('What would you like to change your relaxation playlist to?');
	verifyURL(change, "relax");

}

function editRelaxTime(){
	var change = prompt('What would you like to change your relaxation playlist to?')
	updateRelaxTimeVal(change);
	console.log("Change time");
	$('#relaxTimeInfo').text(change);
}