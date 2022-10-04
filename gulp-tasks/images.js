"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import gulpif from "gulp-if";
import imagemin from "gulp-imagemin";
import imageminZopfli from "imagemin-zopfli";
import imageminGiflossy from "imagemin-giflossy";
import imageminJpegtran from 'imagemin-jpegtran';
// import imageminOptipng from 'imagemin-optipng';
import newer from "gulp-newer";
import debug from "gulp-debug";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
  production = !!argv.production;

gulp.task("images", () => {
  return gulp
    .src(paths.images.src)
    .pipe(newer(paths.images.dist))
    .pipe(
      gulpif(
        production,
        imagemin([
          imageminGiflossy({
            optimizationLevel: 3,
            optimize: 3,
            lossy: 2,
          }),
          // imageminOptipng({}),
          imageminZopfli({
            more: true,
          }),
          imageminJpegtran({
            progressive: true,
          }),
          imagemin.svgo({
            plugins: [
              { removeViewBox: false },
              { removeUnusedNS: false },
              { removeUselessStrokeAndFill: false },
              { cleanupIDs: false },
              { removeComments: true },
              { removeEmptyAttrs: true },
              { removeEmptyText: true },
              { collapseGroups: true },
            ],
          }),
        ])
      )
    )
    .pipe(gulp.dest(paths.images.dist))
    .pipe(
      debug({
        title: "Images",
      })
    )
    .pipe(browsersync.stream());
});
