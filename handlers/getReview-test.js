//how do I set the reviews inside product page

var Review = require("../models/review.js");

module.exports = function(req,reply){
	//this won't be the same
	var id = req.params.id;
	var model = new Review({
		id:id
	});
	
	if(id =="new"){
		return reply.view("reviews",{
			//set screename in to user who's logged in
			screename: "Your screename",
		   review: model.toJSON
		});
	}
	
	model.set("id", id);
	model.load(function(err){
		var data;
		if (err){
			console.log(err);
		}else{
			data = model.toJSON();
		}
		console.log(data);
		reply.view("reviews", {
			reviews:reviews,
			text: data.text,
			stars: data.stars,
			headline:data.headline,
			date:data.date
		});
	});
};
