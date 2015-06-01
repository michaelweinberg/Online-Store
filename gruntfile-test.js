module.exports = function(grunt){
	var npm = ["grunt-contrib-watch", "grunt-concurrent", "grunt-nodemon", "grunt-contrib-less", "grunt-contrib-copy",'grunt-contrib-imagemin',"grunt-autoprefixer"];
	npm.forEach(grunt.loadNpmTasks);
	
	grunt.registerTask("default", ["autoprefixer","concurrent"]);
	
	grunt.initConfig({
		copy:{
			 files: {
			    cwd: 'src/images/',  // set working folder / root to copy
			    src: '**',           // copy all files and subfolders
			    dest: 'build/images',    // destination folder
			    expand: true           // required when using cwd
  			}
		},
		concurrent:{
			dev:{
				tasks:["watch","nodemon","imagemin","less"],
				options:{
					logConcurrentOutput:true
				}
			}
		},
		watch:{
			options:{
				livereload:true,
				
			},
			
			prefix:{
				files:"public/css/style.css",
				tasks:["autoprefixer"]
			},
			images:{
				files:"src/images/**",
				tasks:["copy"]
			},
			html:{
				files:"templates/**",
				 options: {
			      reload: true
			    }
			},
			less:{
				files:"src/less/**/*.less",
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
    	},

	    imagemin: {                          
		    dynamic: {
		    	options: {                       // Target options 
		        optimizationLevel: 3
		      },                         // Another target 
		      files: [{
		        expand: true,                  // Enable dynamic expansion 
		        cwd: 'src/images/',                   // Src matches are relative to this path 
		        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
		        dest: 'public/images/'                  // Destination path prefix 
		      }]
		    }
	  	},
	  	autoprefixer: {
			dev: {
				expand: true,
				flatten: true,
				src: "public/css/**/*.css"
			}
		}
    
    
    
    
    
	});
};
