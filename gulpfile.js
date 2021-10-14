const { src, watch , parallel, dest} = require("gulp");
const pug = require("gulp-pug");
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync").create();
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require("gulp-autoprefixer");

function browsersync () {
    browserSync.init({
        server: {baseDir: "build/"},
        notify: false,
        online: true,
        open: true
    })
    watch("build/*.css").on("change", browserSync.reload);
    watch("build/*.html").on("change", browserSync.reload);
}

function html () {
    return src("pug/index.pug")
        .pipe(pug({
            pretty: "\t"
        }))
        .pipe(dest("build/"))
        .pipe(browserSync.stream())
}

function css() {
    return src("scss/style.scss")
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(autoprefixer(['last 5 versions', '> 1%'], { cascade: true }))
        .pipe(dest("build/"))
        .pipe(browserSync.stream())
}

exports.browsersync = browsersync;
exports.html = html;
exports.css = css;

exports.default = parallel(html, css, browsersync);