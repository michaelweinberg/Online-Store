module.exports = [{
 method:"GET",
	path: "/",
	handler: require("./handlers/home")
}, {
  method:"GET",
	path: "/{index}",
	handler: require("./handlers/product")
},  {
   method: "GET",
  path: "/assets/{param*}",
  handler: {
    directory: {
      path: "public"
    }
  }
}];