var gulp = require("gulp"),
	sass = require("gulp-sass"),
	cssnano = require("cssnano"),
	postcss = require("gulp-postcss"),
	autoprefixer = require("autoprefixer"),
	sourcemaps = require("gulp-sourcemaps"),
	browserSync = require("browser-sync").create(),
	cssDeclarationSorter = require("css-declaration-sorter");

function style() {
	return gulp
		.src("*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass())
		.on("error", sass.logError)
		.pipe(postcss([autoprefixer(), cssnano(), cssDeclarationSorter()]))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(""))
		.pipe(browserSync.stream());
}

function reload() {
	browserSync.reload();
}

function watch() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch("*.scss", style);
	gulp.watch("*.html", reload);
	gulp.watch("js/*.js", reload);
}

exports.style = style;
exports.watch = watch;
