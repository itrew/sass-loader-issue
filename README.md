This repo is meant for reproducing a bug with
[sass-loader](https://github.com/webpack-contrib/sass-loader)
and [foundation-sites](https://github.com/foundation/foundation-sites).
Using `dart-sass`, it is unable to resolve paths that are included
in the `includePaths` option correctly. Using `dart-sass` by itself does work.

To reproduce, there are two npm scripts. Run `npm run build:sass` to
compile the styles with `dart-sass` on its own. Run `npm run build:webpack`
to attempt to build with `sass-loader`.
