var hapi = require("hapi");
var server = new hapi.Server();
var db = require("./db");

var handlebars = require("handlebars");
server.connection({ port: 3000 });
server.start();

db.init(function(err){
	if(err){
		return console.error(err);
	}
	console.log("Database ready, starting server...");
	server.start(function(){
		console.log("Server ready!");
	});
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

server.route(require("./routes"));