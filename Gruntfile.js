module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
        files: '**/*.{sass,html}',
        tasks: ['sass','cssmin']
    },

		sass: {
		  options: {
		    sourceMap: true
		  },
		  dist: {
		    files: {
		      'style.css': 'style.sass'
		    }
		  }
		},

		imagemin: {
		    dynamic: {
		        files: [{
		            expand: true,
		            cwd: './',
		            src: ['**/*.{png,jpg,jpeg,gif}', '!node_modules/**', '!img/**'],
		            dest: 'img'
		        }]
		    }
		},

		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: '',
		      src: ['*.css', '!*.min.css'],
		      dest: '',
		      ext: '.min.css'
		    }]
		  }
		},

		clean: {
		  folder: ['img','style.*','!style.sass']
		},

    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    '*.css',
                    '*.html'
                ]
            },
            options: {
                watchTask: true,
                server: {
									baseDir: "./"
                }
            }
        }
    }
  });

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
  
  grunt.registerTask('default', ['clean','sass','cssmin','imagemin','browserSync','watch']);
};
