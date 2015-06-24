var Review = require("../models/review");

module.exports = function(req, reply) {
  var id = req.params.id;
  var model = new Review({
    id: id
  });
  //new projects don't need to load from the DB
  if (id == "new") {
    return reply.view("product", {
      title: "New Review",
      project: model.toJSON()
    });
  }
  //get model details and then return the page
  model.set("id", id);
  model.load(function(err) {
    var data;
    if (err) {
      console.log(err);
    } else {
      data = model.toJSON();
    }
    reply.view("product", {
      title: data.name,
      project: data
    });
  });
};



module.exports = function(request, reply){
		fs.readFile("products.json", "utf8", function(err,data){		
			var list = JSON.parse(data);
			var index = request.params.index;
			console.log(index);
			reply.view("product", {
			title: "Product",
			product: list.makers[index]
			});
		});		
};