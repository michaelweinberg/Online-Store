var async = require("async");
var sqlite = require("sqlite3");
var db; // used across this module

var facade = {
	connection: null,
	init: function(ready){
		db = new sqlite.Database("review_posts.db", function(err){
			if(err){
				console.error("Couldn't open blog database");
				process.exit(1);
			}
			facade.connection = db;
			
			async.parallel([
				function(c){
					db.run("CREATE TABLE IF NOT EXISTS reviews (name, screename, date, text, stars);",c);
				}
			],function(err){
				if(ready)ready(err);
			});
		});
	},
	getReviews: function(c){
		db.all("SELECT screename, rowid FROM users");
		db.all("SELECT date, text, stars, rowid FROM users");
	}
};

module.exports = facade;