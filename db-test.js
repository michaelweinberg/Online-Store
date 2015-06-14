var async = require("async");
var sqlite = require("sqlite3");
var db;

var facade = {
	
	connection:null,
	init:function(ready){
		var db = new sqlite.Database("prod-reviews.db", function(err){
			// db.run("CREATE TABLE IF NOT EXISTS reviews (screename, date, headline, text, stars, product)");
			
			if(err){
				 console.error("Couldn't open blog database");
				 process.exit(1);
			 }
			 console.log("init called");
			 facade.connection = db;
		
			 async.parallel([
				 function(c){
					 db.run("CREATE TABLE IF NOT EXISTS reviews (screename, date, headline, text, stars, product);",c);
				 }, function(c) {
          db.run("CREATE TABLE IF NOT EXISTS items (date, description, amount);", c);
        }
			 ],function(err){
				 if(ready)ready(err);
			 });
			 
			 
			db.run("INSERT INTO reviews VALUES ('superM1ke','6-4-12','THIS IS MY headline','this is my post','2','french-press')");
			
		});

	},
	
	getAllProjects: function(c){
			db.all("SELECT screename, date, headline, text, stars, product, rowid FROM reviews;", c);
		}
};

module.exports = facade;

	