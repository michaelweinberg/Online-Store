var hapi = require("hapi");
var server = new hapi.Server();
var handlebars = require("handlebars");
server.connection({ port: 8000 });
server.start();



//home page
server.route({
  method: "GET",
  path: "/",
  handler: function(req, reply) {
    reply.view("index",{
			title:"Home Page"
		});
  }
});

server.route({
	method: "GET",
	path: "/product",
	handler: function(request, reply){
		reply.view("/product",{
			title:"Product Page"
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
	handler:function(request, reply){
		fs.readFile("products.json", "utf8", function(err,data){
			var products = JSON.parse(data);
			var item = products.makers[request.params.index];
			reply.view("/product",{
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

