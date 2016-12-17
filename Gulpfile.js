var gulp = require('gulp');
var bump = require('gulp-bump');
var shell = require('shelljs');
var download = require('gulp-download');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('release', ['bump'], function () {
    shell.exec('npm publish').stdout;
})

gulp.task('bump', function () {
    gulp.src('./package.json')
        .pipe(bump())
        .pipe(gulp.dest('./'));
});

gulp.task('run-test', function () {
    shell.exec('node scv.js -n 1.4.4 -b 4343 -c ./config.xml').stdout;
});

gulp.task('test', function (callback) {
    runSequence('download-test', 'run-test', 'clean', callback);
});

gulp.task('download-test', function () {
    download('https://gitlab.filiosoft.com/filiosoft-osp/polr-mobile/raw/master/config.xml')
        .pipe(gulp.dest('./'));
});

gulp.task('clean', function () {
    // You can use multiple globbing patterns as you would with `gulp.src` 
    return del(['./config.xml']);
});