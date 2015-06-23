var PostView = Backbone.View.extend({
	el:".comments",
	events:{
		"click .save":"save"
	},
	template:_.template($("#form-template").html()),
	render:function(){
		var model = this.model.toJSON();
		var html = this.template(model);
		this.$el.html(html);
	}
});
