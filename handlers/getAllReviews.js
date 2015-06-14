var Project = require("../models/review");
var db = require("../db");


module.exports = function(req, reply) {
  db.getAllReviews(function(err, projects) {
    reply.view("reviews", {
    		reviews:reviews,
			text:text,
			stars:stars,
			headline:headline,
			date:date
    });
  });
};