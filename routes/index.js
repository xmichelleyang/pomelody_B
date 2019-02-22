// Get all of our friend data

exports.view = function(request, response){
	var data = require('../data.json');
	console.log(data);
	response.render('index', data);

};
