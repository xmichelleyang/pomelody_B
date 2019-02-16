// This is just an example of what has to be donew

var data = require('../data.json');

exports.dataInfo = function(req, res) {
	res.json(data);
}