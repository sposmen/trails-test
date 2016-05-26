const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const del = require('del');

const src = './assets';
const sassDest = './assets/css';
const dest = './.tmp/public';

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

module.exports = {

  defaultTaskName: 'default',

  tasks: {
    default: ['copyAssets'],
    production: ['compileCss', 'minify', 'concat', 'copyAssetsProd', 'compileTemplateProd'],
    clean: (done) => {
      del.sync([dest + '/**/*', sassDest + '/**/*']);
      done()
    },
    compileCss: {
      dependsOf: ['clean'],
      task: (done) => {
        gulp.src(src + '/sass/**/*.scss')
          .pipe(watch(src + '/sass/**/*.scss'))
          .pipe(sass(sassOptions))
          .pipe(gulp.dest(sassDest));
        done()
      }
    },
    copyAssets: {
      dependsOf: ['compileTemplate'],
      task: (done) => {
        gulp.src([src + '/**/*', '!**/*.scss'])
          .pipe(watch(src + '/**/*'))
          .pipe(gulp.dest(dest));
        done()
      }
    },
    compileTemplate: {
      dependsOf:['compileCss'],
      task: (done) => {
        //TODO Replace <!--SCRIPT--> by js files Replace <!--STYLES--> by css files
        done()
      }
    },
    compileTemplateProd: (done) => {
      //TODO Replace <!--SCRIPT--> by js concat file Replace <!--STYLES--> by css concat file
      done()
    },
    minify: (done) => {
      //TODO minify css/js
      done()
    },
    concat: (done) => {
      //TODO concat js/css in one file
      done()
    },
    copyAssetsProd: (done) => {
      gulp
        .src([src + '/**/*', '!**/*.scss'])//TODO don't copy css and js files, only min.js and min.css
        .pipe(watch(src, {base: src}))
        .pipe(gulp.dest(dest))
      done()
    }
  }

}
