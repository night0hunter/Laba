const { src, dest, watch, parallel, series } = require('gulp');

const scss  = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');


function browsersync() {
    browserSync.init({
        server: {
            baseDir: './app',
        },
        port: 3333,
    });
}

function cleanDist() {
    return del('dist')
}

function images() {
    return src('app/media/images/**/*')

        .pipe(dest('dist/media/images'))
}

function scripts() {
    return src([
        'app/js/main.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
}

//convert styles
function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

function build() {
    return src([
        'app/css/style.min.css',
        'app/media/fonts/**/*',
        'app/js/main.min.js',
        'app/index.html',
        'app/pages/**/*.html'
    ], { base: 'app' })
        .pipe(dest('dist'));
}

function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/index.html']).on('change', browserSync.reload);
    watch(['app/pages/**/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;



exports.build = series(styles, scripts, cleanDist, images, build);
exports.default = parallel(styles, scripts, browsersync, watching);