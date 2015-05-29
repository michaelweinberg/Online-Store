module.exports = function(grunt){
	var npm = ["grunt-contrib-watch", "grunt-contrib-less"];
	npm.forEach(grunt.loadNpmTasks);
	
	grunt.registerTask("default", ["less","watch"]);
	
	grunt.initConfig({
	
	
		watch:{
			options:{
				livereload:true,
				
			},
			less:{
				files:"assets/less/**/*.less",
				tasks:["less"]
			}
		},
		less: {
      		dev: {
        		files: {
		          "assets/css/style.css": "assets/less/*.less"
		        }
      		}
    	}
	});
};
