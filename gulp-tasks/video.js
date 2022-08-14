"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task("video", function () {
  return gulp
    .src(paths.video.src)
    .pipe(gulp.dest(paths.video.dist))
    .pipe(browsersync.stream());
});
