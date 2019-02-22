exports.saveJSON = function(req, res) {

	console.log("trying to saveJSON");
	var fs = require("fs");
	console.log(req.body);
	fs.writeFile("./data.json", JSON.stringify(req.body, null, 4), (err) => {
	  if (err) {
	      console.error(err);
	      return;
	  };
	  console.log("File has been created");
	});
}	