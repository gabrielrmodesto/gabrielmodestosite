var gulp = require("gulp");
var sass = require("gulp-sass");
var html = require("gulp-htmlmin");
var notify = require("gulp-notify");

//sass
gulp.task('sass', function(){
	return gulp.src('src/css/*.css')
				.pipe(sass({outputStyle:"compressed"}))
				.on("error", notify.onError("Error: <%= error.message %>"))
				.pipe(gulp.dest("dist/css/"));
});
//html compressed
gulp.task('html', function(){
	return gulp.src('src/index.html')
				.pipe(html({collapseWhitespace:true}))
				.on("error", notify.onError("Error: <%= error.message %>"))
				.pipe(gulp.dest("dist/"));
});
//default
gulp.task('default', ['html', 'sass'], function(){
    gulp.watch('src/index.html', ['html']);
    gulp.watch('src/css/*', ['sass']);
});