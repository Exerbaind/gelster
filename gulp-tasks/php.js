"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task("php", function () {
  return gulp
    .src(paths.php.src)
    .pipe(gulp.dest(paths.php.dist))
    .pipe(browsersync.stream());
});
