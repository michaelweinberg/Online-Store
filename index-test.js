var hapi = require("hapi");
var server = new hapi.Server();
var db = require("./db-test");
server.connection({ port: 8080 });
db.init(function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("Database ready, starting server...");
  server.start(function() {
    console.log("Server ready!");
  });
});

server.views({
  path: "views/templates",
  layoutPath: "views",
  layout: "default",
  partialsPath: "views/templates/partials",
  engines: {
    html: require("handlebars")
  },
  isCached: false,
  context: {
    dev: true
  }
});

server.route(require("./routes"));
