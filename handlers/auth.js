

module.exports = function(req,reply){
	var users = {
	mike:"12345",
	admin:"admin"
};
		var expected = users[req.payload.user];
		if (req.payload.password == expected){
			var response = reply("hello, " + req.payload.user);
			var id = Date.now();
			response.state("username", req.payload.user);
			response.state("session", id + "");
			console.log(response.request.state.username);
			
			authDB.run("DELETE FROM auth where USERNAME = $user", {
				$user:req.payload.user
			},function(){
				authDB.run("INSERT INTO auth VALUES ($user, $session)",{
					$user:req.payload.user,
					$session:id
				});
			});
		}else{
			reply.redirect("/");
		}
	};