"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
  paths = {
    views: {
      src: ["./src/views/**/*.{htm,html}"],
      dist: "./dist/",
      watch: ["./src/blocks/**/*.{htm,html}", "./src/views/**/*.{htm,html}"],
    },
    styles: {
      src: "./src/styles/main.{scss,sass}",
      dist: "./dist/styles/",
      watch: ["./src/blocks/**/*.{scss,sass}", "./src/styles/**/*.{scss,sass}"],
    },
    scripts: {
      src: "./src/js/index.js",
      dist: "./dist/js/",
      watch: ["./src/blocks/**/*.js", "./src/js/**/*.js"],
    },
    images: {
      src: [
        "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
        "./src/img/assets/**/*.{jpg,jpeg,png,gif,tiff,svg}",
        "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
      ],
      dist: "./dist/img/",
      watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}",
    },
    sprites: {
      src: "./src/img/sprites/*.svg",
      dist: "./dist/img/sprites/",
      watch: "./src/img/sprites/*.svg",
    },
    fonts: {
      src: "./src/fonts/**/*.{woff,woff2}",
      dist: "./dist/fonts/",
      watch: "./src/fonts/**/*.{woff,woff2}",
    },
    favicons: {
      src: "./src/img/favicon/*.{jpg,jpeg,png,gif}",
      dist: "./dist/img/favicons/",
    },
    gzip: {
      src: "./src/.htaccess",
      dist: "./dist/",
    },
    database: {
      src: "./src/database/**/*.json",
      dist: "./dist/database/",
      watch: "./src/database/**/*.json",
    },
  };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series(
  "clean",
  gulp.parallel([
    "views",
    "styles",
    "scripts",
    "database",
    "images",
    "sprites",
    "fonts",
    "favicons",
  ]),
  gulp.parallel("serve")
);

export const prod = gulp.series(
  "clean",
  gulp.parallel([
    "views",
    "styles",
    "scripts",
    "database",
    "images",
    "sprites",
    "fonts",
    "favicons",
    "gzip",
  ])
);

export default development;
