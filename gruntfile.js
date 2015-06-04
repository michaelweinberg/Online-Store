module.exports = function(grunt){
	var npm = ["grunt-contrib-watch", "grunt-contrib-less","grunt-concurrent", "grunt-contrib-copy", "grunt-nodemon"];
	npm.forEach(grunt.loadNpmTasks);
	
	grunt.registerTask("default", ["concurrent"]);
	
	grunt.initConfig({
		
		concurrent:{
			dev:{
				tasks:["watch","nodemon","less","copy"],
				options:{
					logConcurrentOutput:true
				}
			}
		},
		
		copy:{
			 files: {
			    cwd: 'src/images/',  // set working folder / root to copy
			    src: '**',           // copy all files and subfolders
			    dest: 'public/images/',    // destination folder
			    expand: true           // required when using cwd
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
