const gulp = require('gulp')

const server = require('gulp-webserver')

const sass = require('gulp-sass')

const webpack = require('webpack-stream')

const proxy = require('http-proxy-middleware')

const babel = require('gulp-babel')

// 开启服务
gulp.task('server',()=>{
    return gulp.src('./dev')
    .pipe(server({
        host:'localhost',
        port:8000,
        livereload:true,
        directoryListing:{
            enable:true,
            path:'./dev/index.html'
        },
        middleware:[
          proxy('/plate',{
            target:'http://m.banggo.com',
            changeOrigin:true
          }),
          proxy('/dapu', {
            target: 'http://m.dapu.com',
            changeOrigin: true,
            pathRewrite: {
              '^/dapu': ''
            }
          }),
          proxy('/banggou', {
            target: 'http://m.banggo.com',
            changeOrigin: true,
            pathRewrite: {
              '^/banggou': ''
            }
          })
        ]
    }))
})
// sass文件
gulp.task('scss', () => {
    return gulp.src('./src/styles/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dev/styles'))
  })
// js文件
gulp.task('js', () => {
  return gulp.src('./src/scripts/*.js')
    .pipe(webpack({
      entry: {
        index: './src/scripts/index.js'
      }, 
      output: {
        filename: '[name].js'
      },
      module: {
        loaders: [
          { test: /\.html$/, loader: 'string-loader' },
        ],
      }
    }))
    // .pipe(babel({
    //   presets: ['env', 'stage-0']
    // }))
    .pipe(gulp.dest('./dev/scripts'))
})
//html界面
gulp.task('copyhtml', () => {
    return gulp.src(['./src/*.html'])
      .pipe(gulp.dest('./dev/'))
  })
  //图片
  gulp.task('copyimages', () => {
    return gulp.src(['./src/images/**/*'])
      .pipe(gulp.dest('./dev/images'))
  })
//libs依赖包文件
gulp.task('copylibs', () => {
    return gulp.src(['./src/libs/*.js','./src/libs/*.css'])
      .pipe(gulp.dest('./dev/libs'))
  })
//iconfont字体文件
gulp.task('copyicon', () => {
    return gulp.src(['./src/iconfont/**/*'])
      .pipe(gulp.dest('./dev/iconfont'))
  })
//同步监听----------------
gulp.task('watch', () => {
    gulp.watch('./src/*.html', ['copyhtml'])
    gulp.watch('./src/styles/**/*', ['scss'])
    gulp.watch('./src/scripts/**/*', ['js'])
  })


gulp.task('default',['scss','js','copyhtml','copyimages','copylibs','copyicon','server','watch'],()=>{
   console.log('done.'); 
});