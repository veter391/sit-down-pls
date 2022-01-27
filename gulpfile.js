const { src, dest, series, watch } = require('gulp'),
concat      = require('gulp-concat'),
htmlMin     = require('gulp-htmlmin'),
sass        = require('gulp-sass')(require('sass')),
bulk        = require('gulp-sass-bulk-importer'),
prefixer    = require('gulp-autoprefixer'),
cleanCSS    = require('gulp-clean-css'),
svgSprite   = require('gulp-svg-sprite'),
image       = require('gulp-image'),
webp        = require('gulp-webp'),
// webpcss     = require("gulp-webpcss"),
babel       = require('gulp-babel'),
uglify      = require('gulp-uglify-es').default,
notify      = require('gulp-notify'),
sourcemaps  = require('gulp-sourcemaps'),
del         = require('del'),
browserSync = require('browser-sync').create();


const clean = () => {
    return del(['dist'])
}
const cleanBuild = () => {
    return del(['build'])
}

const resources = () => {
    return src('src/resource/**')
        .pipe(dest('dist/libraries'))
}
const resourcesBuild = () => {
    return src('src/resource/**')
        .pipe(dest('build/libraries'))
}
const styles = () => {
    return src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(bulk())
		.pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(prefixer({
            overrideBrowserslist: ['last 8 versions'],
            browsers: [
                'Android >= 4',
                'Chrome >= 20',
                'Firefox >= 24',
                'Explorer >= 11',
                'iOS >= 6',
                'Opera >= 12',
                'Safari >= 6',
            ],
        }))
        // .pipe(webpcss({webpClass: '', noWebpClass: '.no-webp'}))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemaps.write())
        .pipe(concat('style.min.css'))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}
const stylesBuild = () => {
    return src('src/scss/**/*.scss')
        .pipe(bulk())
		.pipe(sass({
            outputStyle: 'compressed'
          }).on('error', sass.logError))
        .pipe(prefixer({
            overrideBrowserslist: ['last 8 versions'],
            browsers: [
                'Android >= 4',
                'Chrome >= 20',
                'Firefox >= 24',
                'Explorer >= 11',
                'iOS >= 6',
                'Opera >= 12',
                'Safari >= 6',
            ],
        }))
        // .pipe(webpcss({}))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(concat('style.min.css'))
        .pipe(dest('build'))
}


const htmlMinify = () => {
    return src('src/**/*.html')
        .pipe(htmlMin({
            collapseWhitespace: true,
        }))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}
const htmlMinifyBuild = () => {
    return src('src/**/*.html')
        .pipe(htmlMin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(dest('build'))
}


const svgSprites = () => {
    return src('src/img/svg/**/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest('dist/img'))
}
const svgSpritesBuild = () => {
    return src('src/img/svg/**/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest('build/img'))
}


const scripts = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('script.js'))
    .pipe(uglify({
        // toplevel: true сильно сжымает js и выбрасыает лишний код
    }).on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}
const scriptsBuild = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('script.js'))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(dest('build'))
}

const PHP = () => {
  return src('src/php/*/**')
  // .pipe(concat('main.php'))
  .pipe(dest('dist'))
}
const PHPBuild = () => {
  return src('src/php/**/*.php')
  .pipe(concat('main.php'))
  .pipe(dest('build'))
}
const PHPClear = () => {
  return src('src/*.php')
  .pipe(dest('dist'))
}
const PHPClearBuild = () => {
  return src('src/*.php')
  .pipe(dest('build'))
}

const fonts = () => {
    return src([
        'src/fonts/**/*.woff',
        'src/fonts/**/*.woff2'
    ])
    .pipe(dest('dist/fonts'))
}
const fontsBuild = () => {
    return src([
        'src/fonts/**/*.woff',
        'src/fonts/**/*.woff2'
    ])
    .pipe(dest('build/fonts'))
}

const icon = () => {
    return src([
        'src/*.jpg',
        'src/*.png',
        'src/*.svg',
        'src/*.jpeg',
    ])
    // .pipe(image())
    .pipe(dest('dist'))
}
const iconBuild = () => {
    return src([
        'src/*.jpg',
        'src/*.png',
        'src/*.svg',
        'src/*.jpeg',
    ])
    .pipe(image())
    .pipe(dest('build'))
}

const images = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/*.svg',
        'src/img/**/*.jpeg',
        'src/img/**/*.webp',
    ])
    // .pipe(image())
    .pipe(dest('dist/img'))
}
const imagesWebp = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/*.svg',
        'src/img/**/*.jpeg',
    ])
    .pipe(webp())
    .pipe(dest('dist/img'))
}
const imagesBuild = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/*.svg',
        'src/img/**/*.jpeg',
        'src/img/**/*.webp',
    ])
    .pipe(image())
    .pipe(dest('build/img'))
}
const imagesWebpBuild = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/*.svg',
        'src/img/**/*.jpeg',
    ])
    .pipe(webp())
    .pipe(dest('build/img'))
}


const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
}

watch('src/**/*.html', htmlMinify);
watch('src/scss/**/*.scss', styles);
watch('src/img/svg/**/*.svg', svgSprites);
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)
watch('src/php/**/*.php', PHP)
watch('src/*.php', PHPClear)

exports.clean       = clean
exports.styles      = styles
exports.scripts     = scripts
exports.htmlMinify  = htmlMinify
exports.buildclean  = cleanBuild
exports.PHP         = PHP , PHPClear
exports.PHPBuild    = PHPBuild , PHPClearBuild
exports.build       = series(cleanBuild, resourcesBuild, iconBuild, htmlMinifyBuild, scriptsBuild, PHPBuild , PHPClearBuild, fontsBuild, stylesBuild, imagesBuild, imagesWebpBuild, svgSpritesBuild)
exports.default     = series(clean, resources, icon, htmlMinify, scripts, PHP , PHPClear, fonts, styles, images, imagesWebp, svgSprites, watchFiles)
