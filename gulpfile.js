var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var notify = require('gulp-notify');

gulp.task('sass', function(){
	return gulp.src('src/scss/style.scss')
			   .pipe(sass({outputStyle:"compressed"}))
			   .on("error", notify.onError("Error: <%= error.message %>"))
			   .pipe(gulp.dest('dist/css/'))
			   .pipe(browserSync.stream());
});

gulp.task('htmlmin', function(){
	return gulp.src('src/index.html')
			   .pipe(htmlmin({collapseWhiteSpace:true}))
			   .on("error", notify.onError("Error: <%= error.message %>"))
			   .pipe(gulp.dest('dist/'))
			   .pipe(browserSync.stream());
});

gulp.task('browserSync', ['sass', 'htmlmin'], function(){
	browserSync.init({
		server: 'dist/'
	});
	gulp.watch('src/scss/style.scss', ['sass']);
	gulp.watch('src/index.html', ['htmlmin']);
});

gulp.task('default', ['browserSync']);

