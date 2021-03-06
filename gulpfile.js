var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('styles' , function () {
	gulp.src('./style.sass')
	.pipe(sass())
	.pipe(gulp.dest('./'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('serve' , function () {

	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('./*.sass' , ['styles']);
	gulp.watch('./**/*.html').on('change' , browserSync.reload);

});

gulp.task('default' , ['styles' , 'serve']);