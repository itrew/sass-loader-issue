const sass = require('sass');
const mkdirp = require('mkdirp');
const fs = require('fs');
const path = require('path');

const r = sass.renderSync({
  file: './src/main.scss',
  includePaths: [
    path.resolve(__dirname, './node_modules/foundation-sites/scss'),
    path.resolve(__dirname, './node_modules/motion-ui'),
  ]
})

mkdirp('dist/sass', () => {
  fs.writeFileSync('dist/sass/index.css', r.css);
})
