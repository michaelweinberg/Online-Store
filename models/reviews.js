var Backbone = require("backbone");
var db = require("../db");

var LOAD = "SELECT screename, date, text, stars FROM reviews WHERE rowid = $id";
var SAVE_NEW ="INSERT INTO projects (screename, date, text, stars) VALUES ($screename, $date, $text, $stars);";
var UPDATE = "UPDATE review SET screename=$screename,date=$date,text=$text,stars=$stars WHERE rowid=$id;";

module.exports=Backbone.Model.extend({
	defaults:{
		screename:"",
		cliet:"",
		address:"",
		id: "new"
	},
	load:function(done){
		var self = this;
		var query = db.connection.prepare(LOAD);
		var DATA = this.toJSON();
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
		var q= id == "new" ? SAVE_NEW : UPDATE;
		var query = db.connection.prepare(q);
		var data = this.toJSON();
		query.run({
			$name:data.name,
			$client:data.client,
			$address:data.address,
			$id: id == "new"?undefined:data.id
		},done);
	}
});
