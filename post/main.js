var PostModel = require("./postModel");
var PostView = require("./postView");
	var post = new PostModel();
		post.on("submit", function(){
			console.log(post.toJSON());
		});
		
		var view = new PostView({
			model:post
		});
		
		view.render();
