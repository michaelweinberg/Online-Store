var fs = require("fs");
var Review = require("../models/review");
var db = require("../db");

module.exports = function(request, reply){
		fs.readFile("products.json", "utf8", function(err,data){
			var list = JSON.parse(data);
			var index = request.params.index;		
			var id = request.params.id;
			var model = new Review({
				id:id
			});
			
		db.getAllReviews(function(err, reviews) {
			
			if(id=="new"){
				return reply.view("product",{
					title: data.name,
					review: model.toJSON(),
					product: list.makers[index],
					 reviews: reviews
				});
			}
			model.set("id",id);
			model.load(function(err){
				var data;
				if(err){
					console.log(err);
				}else{
					data = model.toJSON();
				}
					reply.view("product",{
						title:data.name,
						 reviews: reviews,
						product: list.makers[index]
					});
				});
		});	
	});	
};

		  
		