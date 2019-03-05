exports.saveJSON = function(req, res) {
	var fs = require('fs');
	console.log(req.body);
	fs.writeFile("data.json", JSON.stringify(req.body, null, 4), (err) => {
	  if (err) {
	      console.error(err);
				res.send(400);
	      return;
	  };
	  console.log("File has been created in", __dirname);
		res.send(200);
	});

}
