(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

module.exports = PostModel;
},{}],2:[function(require,module,exports){
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

module.exports = PostView;
},{}],3:[function(require,module,exports){
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

},{"./postModel":1,"./postView":2}]},{},[3]);
