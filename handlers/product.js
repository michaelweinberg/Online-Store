var fs = require("fs");

module.exports = function(request, reply){
		fs.readFile("products.json", "utf8", function(err,data){		
			var list = JSON.parse(data);
			var index = request.params.index;
			console.log(index);
			reply.view("product", {
			title: "Product",
			product: list.makers[index]
			});
		});		
};