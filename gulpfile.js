var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('css', function(){
	gulp.src('src/sass/*.sass')
		.pipe(sass({outputStyle:'compressed'}))
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(gulp.dest('docs/styles'))
});
gulp.task('html', function(){
	gulp.src('src/pug/index.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('docs'))
});
gulp.task('js', function(){
	gulp.src([
		'bower_components/jquery/dist/jquery.js',
		'bower_components/modernizr/src/Modernizr.js'
		])
		.pipe(concat('output.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('docs/js'))
});
gulp.task('watch', function(){
	gulp.watch('src/sass/*.sass', ['css']);
	gulp.watch('src/pug/*.pug', ['html']);
	gulp.watch('src/pug/content/*.pug', ['html']);
})
gulp.task('default', ['html', 'css']);