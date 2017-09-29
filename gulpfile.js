/* 
* @Author: Marte
* @Date:   2017-08-29 17:15:37
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-27 10:17:00
*/
// * gulp
// * gulp-sass


var gulp = require('gulp');


//任务：利用gulp-sass编译sass
//如何使用gulp创建一个任务
var sass = require('gulp-sass');

gulp.task('compilsSass',function(){
    return setTimeout(function(){
        return gulp.src('./src/sass/*.scss')

        .pipe(sass({outputStyle:'compact'}).on('error',sass.logError))

        .pipe(gulp.dest('./src/css'))
    },500);
})

// 监听文件修改，并自动执行相应任务
// 只要文件有修改，则自动编译sass文件
// *: 匹配文件名
// **: 匹配文件夹名
gulp.task('jtSass',function(){
    gulp.watch('./src/**/*.scss',['compileSass']);
});

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('mergeJs',function(){
    return gulp.src('./src/js/*.js')

    .pipe(concat('all.js'))

    .pipe(gulp.dest('./dist/js'))

    .pipe(uglify())

    // .pipe(rename({suffix:'.min'}))
    
    .pipe(gulp.dest('./dist/js'))
})

var browserSync = require('browser-sync');
gulp.task('server',function(){
    browserSync({
        proxy:'http://localhost:0128',

        port:0129,

        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
    });


    gulp.watch('./src/**/*.scss',['compilsSass']);
})