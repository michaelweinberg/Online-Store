var Backbone = require("backbone");
var db = require("../db");

var LOAD = "SELECT screename, date, headline, text, stars, product FROM reviews WHERE rowid = $id";
var SAVE_NEW ="INSERT INTO reviews (screename, date, headline, text, stars, product) VALUES ($screename, $date, $headline,$text, $stars,$product);";
var UPDATE = "UPDATE reviews SET screename=$screename,date=$date,$headline=headline,text=$text,stars=$stars, product=$product WHERE rowid=$id;";
var LAST = "SELECT last_insert_rowid() AS rowid FROM projects;";

module.exports=Backbone.Model.extend({
	defaults:{
		screename:"",
		date:"",
		text:"",
		stars:0,
		headline:"",
		//how can I automatically set this value to the product url
		product:"",
		id: "new"
	},
	load:function(done){
		var self = this;
		var query = db.connection.prepare(LOAD);
		var data = this.toJSON();
		query.get({
			$id:data.id
		},function(err,loaded){
			self.set(loaded);
			done(err);
		});
	},
	save:function(done){
		var self = this;
		var id = this.get("id");
		var q = id == "new" ? SAVE_NEW : UPDATE;
		var query = db.connection.prepare(q);
		var data = this.toJSON();
		query.run({
			$screename:data.screename,
			$text:data.text,
			$headline:data.headline,
			$stars:data.stars,
			$date:data.date,
			$product:data.product,
			$id: id == "new"?undefined:data.id
		},done);
	}
});
