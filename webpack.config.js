const path = require('path');

const includePaths = [
  path.resolve(__dirname, './node_modules/foundation-sites/scss'),
  path.resolve(__dirname, './node_modules/motion-ui'),
];

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/webpack'),
    filename: 'index.js',
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                includePaths,
              },
            },
          },
        ],
      },
    ],
  },
};
