const { series, src, dest, watch } = require('gulp');
// `clean` 函数并未被导出（export），因此被认为是私有任务（private task）。
// 它仍然可以被用在 `series()` 组合中。
function clean(cb) {
  // body omitted
  cb();
}

// `build` 函数被导出（export）了，因此它是一个公开任务（public task），并且可以被 `gulp` 命令直接调用。
// 它也仍然可以被用在 `series()` 组合中。
function build(cb) {
  // body omitted
  cb();
}


function callbackError(cb) {
  // `cb()` should be called by some async work
  cb(new Error('kaboom'));
}

exports.build = build;
// exports.default = series(clean, build, callbackError);
exports.default = function() {
  return src('src/js/*.js')
  .pipe(dest('output/'))
}
watch('src/js/*.js', series(clean))