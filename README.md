# browserify-html [![browserify-html](https://img.shields.io/npm/v/browserify-html.svg?style=flat-square)](https://www.npmjs.com/package/browserify-html)

Simple HTML transform for Browserify

```bash
npm i browserify-html
```

## Options

- exts - default: `['html', 'tpl']`
- minify - default: `{removeComments: true, collapseWhitespace: true, collapseBooleanAttributes: true, removeRedundantAttributes: true, removeEmptyAttributes: true}`, see [html-minifier](https://github.com/kangax/html-minifier#options-quick-reference)

## Usage

```javascript
const html = require('browserify-html');
```

### Browserify Middleware

```javascript
const bunlde = browserify()
    .transform(html, {
        exts: ['html', 'tpl'], // default
        minify: { // html-minifier options, see more: https://github.com/kangax/html-minifier#options-quick-reference
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true
        }
    });
```

### Gulp and Browserify

```javascript
gulp.task('js', () => {
    return gulp.src('./src/js/app.js')
        .pipe(browserify({
            transform: html
        }))
        .pipe(gulp.dest('./dist/js'));
});
```

