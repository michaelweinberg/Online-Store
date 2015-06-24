var fs = require("fs");
var db = require("../db");

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