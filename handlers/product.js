
var fs = require("fs");
var Review = require("../models/review");
var db = require("../db");

module.exports = function(request, reply){
		fs.readFile("products.json", "utf8", function(err,data){
			var list = JSON.parse(data);
			var index = request.params.index;		
			var id = request.params.id;
			var model = new Review({
				id:index
			});
			
		db.getAllReviews(function(err, reviews) {
			
		console.log("product handler", model.toJSON());
		console.log(id);
		console.log(index);
			model.set("id",id);
			model.load(function(err){
				var data;
				if(err){
					console.log(err);
				}else{
					data = model.toJSON();
				}
					reply.view("product",{
						
						 reviews: reviews,
						product: list.makers[index],
						 title:"Product"
					});
				});
		});	
	});	
};

		  
		