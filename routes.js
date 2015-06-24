module.exports = [{
 method:"GET",
	path: "/",
	handler: require("./handlers/home")
}, {
  method:"GET",
	path: "/{id}",
	handler: require("./handlers/product")
},  

{
   method: "GET",
  path: "/assets/{param*}",
  handler: {
    directory: {
      path: "public"
    }
  }
}, {
	method:"POST",
	path:"/{id}",
	handler:require("./handlers/setReview")
}


];