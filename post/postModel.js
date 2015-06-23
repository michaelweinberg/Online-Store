var PostModel = Backbone.Model.extend({
	defaults:{
		title:"",
		stars:0,
		comment:""
	},
	save:function(save){
		var headline = this.get("title");
		var rating = this.get("stars");
		var text = this.get("comment");
		
		this.set("post",rating);
	}
});
