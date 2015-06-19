module.exports = [{
 method:"GET",
	path: "/",
	handler: require("./handlers/home")
}, {
  method:"GET",
	path: "/{index}",
	handler: require("./handlers/product")
},  {
  path: "/route/{id}",
  method: "GET",
  handler: require("./handlers/getAllReviews")
}, 

{
   method: "GET",
  path: "/assets/{param*}",
  handler: {
    directory: {
      path: "public"
    }
  }
},

{
	method:"POST",
	path:"/{page}",
	handler:require("./handlers/auth")
}


];