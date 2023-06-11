import gulp from "gulp";
import yargs from "yargs";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCSS from "gulp-clean-css";
import gulpIf from "gulp-if";
import sourcemaps from "gulp-sourcemaps";
import imagemin from "gulp-imagemin";
import del from "del";
import webpackStream from "webpack-stream";
import GulpUglify from "gulp-uglify";
import named from "vinyl-named";
import browserSync from "browser-sync";
import GulpZip from "gulp-zip";
import replace from "gulp-replace";
import theme from "./package.json";
import gulpPurgeCSS from "gulp-purgecss";
const local = browserSync.create();

const sass = gulpSass(dartSass);

const PRODUCTION = yargs.argv.prod;

const paths = {
  styles: {
    
    src: ["src/assets/scss/main.scss", "src/assets/scss/admin.scss"],
    dest: "dist/assets/css",
    css: "dist/assets/css/main.css",
  },
  scripts: {
    src: ["src/assets/js/main.js", "src/assets/js/admin.js"],
    dest: "dist/assets/js",
  },
  images: {
    src: "src/assets/images/**/*.{jpg,jpeg,png,gif,svg}",
    dest: "dist/assets/images",
  },
  others: {
    src: [
      "src/assets/**/*",
      "!src/assets/{scss,images,js}",
      "!src/assets/{scss,images,js}/**/*",
    ],
    dest: "dist/assets",
  },
  package: {
    src: [
      "**/*",
      "!.vscode",
      "!node_modules{,/**}",
      "!packaged{,/**}",
      "!src{,/**}",
      "!.babelrc",
      "!.gitignore",
      "!gulpfile.babel.js",
      "!package.json",
      "!package-lock.json",
      "!composer-lock",
      "!composer.json",
      "!vendor",
    ],
    dest: "packaged",
  },
};

//Browersync load

// export const loadServer = (done) => {
//   local.init({
//     proxy: "http://webfx.local/",
//   });
//   done();
// };

// reload
// export const reloadServer = (done) => {
//   local.reload();
//   done();
// };

// Cleaning Dest Folder
export const clean = () => del(["dist"]);
// PURGE CSS
export const purgeCSS = () => {
  return gulp
    .src(paths.styles.dest)
    .pipe(gulpIf(PRODUCTION, gulpPurgeCSS()))
    .pipe(gulp.dest(paths.styles.dest));
};
// SCSS in action
export const styles = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(gulpIf(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpIf(PRODUCTION, cleanCSS({ compatibility: "ie9" })))
    .pipe(gulpIf(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(paths.styles.dest))
    // .pipe(local.stream());
};

// minify images
export const images = () => {
  return gulp
    .src(paths.images.src)
    .pipe(gulpIf(PRODUCTION, imagemin()))
    .pipe(gulp.dest(paths.images.dest));
};

// copy other files other than on the above pipelines
export const copy = () => {
  return gulp.src(paths.others.src).pipe(gulp.dest(paths.others.dest));
};

// invoke to watch changes
export const watch = () => {
  gulp.watch("src/assets/scss/**/*.scss", styles);
  gulp.watch("blocks/**/*.scss", styles);
  gulp.watch("src/assets/js/**/*.js", gulp.series(scripts));
  gulp.watch("**/*.php");
  gulp.watch(paths.images.src, gulp.series(images));
  gulp.watch(paths.others.src, gulp.series(copy));
};

// build scripts
export const scripts = () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(named())
    .pipe(
      webpackStream({
        module: {
          rules: [
            {
              test: /\.js$/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env"], //or ['babel-preset-env']
                },
              },
            },
          ],
        },
        output: {
          filename: "[name].js",
        },
        externals: {
          jquery: "jQuery",
        },
        devtool: !PRODUCTION ? "inline-source-map" : false,
        mode: PRODUCTION ? "production" : "development", //add this
      })
    )
    .pipe(gulpIf(PRODUCTION, GulpUglify()))
    .pipe(gulp.dest(paths.scripts.dest));
};

//package creation
export const packaging = () => {
  return gulp
    .src(paths.package.src)
    .pipe(replace("_placeholder", theme.name))
    .pipe(GulpZip(`${theme.name}.zip`))
    .pipe(gulp.dest(paths.package.dest));
};

// build task for development
export const dev = gulp.series(
  clean,
  gulp.parallel(styles, copy, images, scripts),
  // loadServer,
  watch
);

// build task for production
export const build = gulp.series(
  clean,
  gulp.parallel(styles, copy, images, scripts),
  purgeCSS
);

// // build task for theme-zip
export const bundle = gulp.series(build, packaging);

export default dev;