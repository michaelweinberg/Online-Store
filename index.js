var hapi = require("hapi");
var server = new hapi.Server();
var fs = require("fs");
var handlebars = require("handlebars");
server.connection({ port: 8000 });
server.start();



//home page
server.route({
	method:"GET",
	path: "/",
	handler: function(request, reply){
		fs.readFile("products.json", "utf8", function(err,data){		
			var list = JSON.parse(data);
			
			reply.view("index", {
			title: "Home",
			makers: list.makers,
			mugs: list.mugs
			});
		});		
	}
});
 

server.route({
  method: "GET",
  path: "/assets/{param*}",
  handler: {
    directory: {
      path: "public"
    }
  }
});

server.route({
	method:"GET",
	path: "/{index}",
	handler: function(request, reply){
		fs.readFile("products.json", "utf8", function(err,data){		
			var list = JSON.parse(data);
			var index = request.params.index;
			console.log(index);
			reply.view("product", {
			title: "Product",
			product: list.makers[index]
			});
		});		
	}
});

server.views({
	path:"templates",
	engines:{
		html:require("handlebars")
	},
	layoutPath: "layouts",
	layout: "default",
	partialsPath: "templates/partials",
	isCached:false
});

