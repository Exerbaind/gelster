"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import jsonMinify from "gulp-json-minify";
import browsersync from "browser-sync";

gulp.task("database", function () {
  return gulp
    .src(paths.database.src)
    .pipe(jsonMinify())
    .pipe(gulp.dest(paths.database.dist))
    .pipe(browsersync.stream());
});
