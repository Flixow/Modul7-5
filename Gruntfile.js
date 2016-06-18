module.exports = function(grunt) {

  grunt.initConfig({
		sass: {
		  options: {
		    sourceMap: true
		  },
		  dist: {
		    files: {
		      'style.css': 'style.sass'
		    }
		  }
		}

		imagemin: {
		    dynamic: {
		        files: [{
		            expand: true,
		            cwd: 'images/',
		            src: ['**/*.{png,jpg,gif}'],
		            dest: 'images/build/'
		        }]
		    }
		}
  });

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
  
  grunt.registerTask('default', ['sass','imagemin']);
};
