var sqlite = require("sqlite3");
var hapi = require("hapi");
var server = new hapi.Server();
server.connection({port:8000});

var db = new sqlite.Database("auth.db",function(){
	db.run("CREATE TABLE IF NOT EXISTS auth (username,session)",
	function(){
		console.log("starting server");
		server.start();
	});
});

server.route({
	method:"GET",
	path:"/",
	handler:function(req,reply){
		console.log(req.state);
		if(!req.state.user){
			return reply.redirect("/login");
		}
		db.get("SELECT * FROM auth WHERE user = $user",{
			$user:req.state.user
		},function(err,result){
			console.log(err);
			if(!result){
				return reply.redirect("/login");
			}
			if(result.session != req.state.session){
				return reply.redirect("/login");
			}
			reply("it's a mystery");
		});
	}
});

