const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Vazifa: Sassni kompilyatsiya qilish
function compileSass() {
  return gulp
    .src("./scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
}

// Kuzatuv vazifasi
function watchFiles() {
  gulp.watch("./scss/**/*.scss", { usePolling: true }, compileSass);
}

exports.default = gulp.series(compileSass, watchFiles);