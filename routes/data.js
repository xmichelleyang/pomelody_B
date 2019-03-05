// This is just an example of what has to be donew


var data = require('../data.json');

exports.dataInfo = function(req, res) {
	console.log("Trying to read in", __dirname);
	console.log("I see ", data);
	res.json(data);
}
