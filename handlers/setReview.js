var Review = require("../models/review");

// module.exports = function(req, reply) {
  // var payload = req.payload;
  // var model = new Review(payload);
  // model.save(function(err) {
    // if (err) {
      // console.error(err);
    // }
    // //reload data
    // var response = reply("Saved!");
    // response.statusCode = 302;
    // response.headers.Location = "/";
  // });
// };

module.exports = function(req, reply) {
  var payload = req.payload;
  console.log("Payload ", payload);
  var product = req.params.id;
  console.log("Product", req.params.id);
 payload.product = "product";
  console.log("Payload after product set", payload);
  
  var model = new Review(payload);
  model.save(function(err) {
    if (err) {
      console.error(err);
    }
    //reload data
    var response = reply("Saved!");
    response.statusCode = 302;
    response.headers.Location = "/";
  });
};