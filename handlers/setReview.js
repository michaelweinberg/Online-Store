var Review = require("../models/review");

module.exports = function(req,reply){
	var payload = req.payload;
	var model = new Proejct(payload);
	model.save(function(err){
		if(err){
			console.error(err);
		}
		
		var response = reply("Saved!");
		response.statusCode = 302;
		//set the location to the current page
		response.header.Location = "";
	});
};
