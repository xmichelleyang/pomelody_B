// 	var data = require('../data.json');
// exports.dataInfo = function(req, res) {
// 	console.log("Trying to read in", __dirname);
// 	console.log("I see ", data);
// 	res.json(data);
// }


exports.dataInfo = function(req, res) {

	// Define JSON File
	var fs = require("fs");
	// Get content from file
	var contents = fs.readFileSync("data.json");
	// Define to JSON type
	var jsonContent = JSON.parse(contents);
	// Get Value from JSON
	console.log("what do I see?:", jsonContent);
	res.json(jsonContent);
}
