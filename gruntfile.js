module.exports = function(grunt){
	var npm = ["grunt-contrib-watch", "grunt-contrib-less","grunt-concurrent", "grunt-nodemon"];
	npm.forEach(grunt.loadNpmTasks);
	
	grunt.registerTask("default", ["concurrent"]);
	
	grunt.initConfig({
		
		concurrent:{
			dev:{
				tasks:["watch","nodemon","less"],
				options:{
					logConcurrentOutput:true
				}
			}
		},
	
	
		watch:{
			options:{
				livereload:true,
				
			},
			html:{
				files:"templates/**",
				 options: {
			      reload: true
			    }
			},
			less:{
				files:"src/less/*.less",
				tasks:["less"]
			}
		},
		nodemon:{
				dev:{
					script:"index.js"
				}
		},
		less: {
      		dev: {
        		files: {
		          "public/css/style.css": "src/less/*.less"
		        }
      		}
    	}
	});
};
