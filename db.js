var async = require("async");
var sqlite = require("sqlite3");
var db; // used across this module

var facade = {
  connection: null,
  init: function(ready) {
    db = new sqlite.Database("prod-reviews.db", function(err) {
      if (err) {
        console.error("Couldn't open review database");
        process.exit(1);
      }
      
      //store the connection for outside modules to use directly
      facade.connection = db;
      
      //create tables, and execute ready callback when done
      async.parallel([
        function(c) {
          db.run("CREATE TABLE IF NOT EXISTS reviews (screename, date, headline, text, stars, product);",c);
        },
        function(c) {
          db.run("CREATE TABLE IF NOT EXISTS items (date, description, amount);", c);
        }
      ], function(err) {
        if (ready) ready(err);
      });
    });
  },
  getAllReviews: function(c) {
    	db.all("SELECT screename, date, headline, text, stars, product, rowid FROM reviews", c);
  }
};

module.exports = facade;