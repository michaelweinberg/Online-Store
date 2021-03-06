var hapi = require("hapi");
var server = new hapi.Server();
var db = require("./db");


var users = {
	mike:"12345",
	admin:"admin"
};

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

var Review = require("./models/review");

server.views({
	path:"views/templates",
	engines:{
		html:require("handlebars")
	},
	layoutPath: "layouts",
	layout: "default",
	partialsPath: "views/templates/partials",
	isCached:false
});

server.route(require("./routes"));