// This is just an example of what has to be donew



exports.dataInfo = function(req, res) {
	var data = require('../data.json');
	console.log("Trying to read in", __dirname);
	console.log("I see ", data);
	res.json(data);
}
