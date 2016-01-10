var gulp = require("gulp");
var sass = require("gulp-sass");
var pleeease = require("gulp-pleeease");


gulp.task("sass", function() {
    gulp.src("../sass/**/*scss")
        .pipe(sass())
        .pipe(pleeease())
        .pipe(gulp.dest("../css"));
    gulp.watch("../sass/**/*.scss",["sass"]);
});

