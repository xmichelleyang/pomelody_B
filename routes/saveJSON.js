exports.saveJSON = function(req, res) {
	var fs = require("fs");
	console.log(req.body);
	fs.writeFile("./test.json", JSON.stringify(req.body, null, 4), (err) => {
	  if (err) {
	      console.error(err);
	      return;
	  };
	  console.log("File has been created");
	  
	});
}	