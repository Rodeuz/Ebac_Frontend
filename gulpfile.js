const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const soucemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const obfuscate = require("gulp-obfuscate");

function imgcompress() {
  return gulp.src("./source/img/*").pipe(imagemin()).pipe(gulp.dest("./build/img"));
}

function js_minify() {
  return gulp.src("./source/scripts/*.js").pipe(uglify()).pipe(obfuscate()).pipe(gulp.dest("./build/scripts"));
}

function sass_compiler() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(soucemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(soucemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

exports.default = function () {
  gulp.watch("./source/styles/*.scss", { ignoreInitial: false }, gulp.series(sass_compiler));
  gulp.watch("./source/scripts/*.js", { ignoreInitial: false }, gulp.series(js_minify));
  gulp.watch("./source/img/*", { ignoreInitial: false }, gulp.series(imgcompress));
};
