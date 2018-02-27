const through = require('through');
const minify = require('html-minifier').minify;

const prefix = 'module.exports = ';

module.exports = (file, options) => {
    options = Object.assign({
        exts: ['html', 'tpl'],
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true
        }
    }, options);
    let ext = file.split('.').pop();
    if (options.exts.includes(ext)) {
        let content = '';
        return through(
            chunk => {
                content += chunk.toString();
            },
            function() {
                if (!content.startsWith(prefix)) {
                    if (options.minify) {
                        content = minify(content, options.minify);
                    }
                    content = prefix + JSON.stringify(content);
                }
                this.queue(content);
                this.queue(null);
            }
        );
    } else {
        return through();
    }
};
