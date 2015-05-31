var gulp = require("gulp");
var sass = require("gulp-sass");
var header = require('gulp-header');
var inlinnsource = require('gulp-inline-source');

gulp.task("default", function(){
	//sass
	gulp.src("dev/style.scss")
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(header('/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */'))
		.pipe(gulp.dest("dev"));

	gulp.src("dev/normalize-css.html")
		.pipe(inlinnsource())
		.pipe(gulp.dest("dist"));
});



