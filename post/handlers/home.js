var db = require("../db");

module.exports = function(req, reply) {
  db.getAllProjects(function(err, reviews) {
    reply.view("index", {
      projects: reviews,
      title: "Home"
    });
  });
};