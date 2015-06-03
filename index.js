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
		fs.readFile("books.json", "utf8", function(err,data){
			var links =[];
			var list = JSON.parse(data);
			reply.view("index", {
			title: "Books",
			//don't re-parse the data, just pass in the objetc
			books: list.books
			});
		});		
	}
});
 


// server.route({
	// method: "GET",
	// path: "/product",
	// handler: function(request, reply){
		// reply.view("/product",{
			// title:"Product Page",
			// products: INSERT
		// });
	// }
// });


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
	handler:function(request, reply){
		fs.readFile("products.json", "utf8", function(err,data){
				data = JSON.parse(data);
				var link = request.params.index;
				var item = data.makers[link];
				
			reply.view("product", {
			title: "Hello",
			loop: item
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
	isCached:false
});

