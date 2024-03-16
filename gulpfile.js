// 1. 清除旧的打包产物
// 2. 打包es、lib
// 3. declaration、copyReadme

const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');

gulp.task('clean build', async () => {
  await del('dist');
  await del('es');
  await del('lib');
});
gulp.task('es module', () => {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  });
  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
});
gulp.task('common js', () => {
  return gulp.src(['./es/**/*.js']).pipe(babel({ configFile: '../../.babelrc' })).pipe(gulp.dest('lib/'));
});
// 实现d.ts类型声明
gulp.task('declaration', () => {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    declaration: true,
    emitDeclarationOnly: true, // 只导出d.ts ，不导出js
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});
gulp.task('copyReadme', async () => {
  await gulp.src('../../README.md').pipe(gulp.dest('../../packages/hooks'));
});
exports.default = gulp.series('clean build', 'es module', 'common js', 'declaration', 'copyReadme');
