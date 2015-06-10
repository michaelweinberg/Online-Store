var fs = require("fs");

module.exports = function(request, reply){
		fs.readFile("products.json", "utf8", function(err,data){		
			var list = JSON.parse(data);
			
			reply.view("index", {
			title: "Home",
			makers: list.makers,
			mugs: list.mugs
			});
		});		
};