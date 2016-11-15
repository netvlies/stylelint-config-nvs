# stylelint-config-nvs

[![NPM version](http://img.shields.io/npm/v/stylelint-config-nvs.svg)](https://www.npmjs.org/package/stylelint-config-nvs)

> The [Netvlies](https://www.netvlies.nl) shareable config for stylelint.

## Installation

To make use of this config, install this package as a development dependency of your project:

    npm install stylelint-config-nvs --save-dev

## Usage

Create a [`.stylelintrc`](http://eslint.org/docs/user-guide/configuring#configuration-file-formats) config file:

### .stylelintrc
```js
{
    "extends": "stylelint-config-nvs"
}
```

### package.json
Or add the Stylelint config to your `package.json`:

```json
{
  "name": "my-awesome-project",
  "stylelint": {
    "extends": "stylelint-config-nvs"
  }
}
```

### gulpfile.js
```js
    var gulp = require('gulp');
    var stylelint = require('gulp-stylelint');

    gulp.task('generateClientSass', function () {
        return gulp
            .src(['scss/*.scss', '!scss/vendor/*.scss'])
            .pipe(stylelint({
                syntax: 'scss',
                reporters: [
                    { formatter: 'string', console: true }
                ]
            }))
    });
```

## Tools

* [Build tools](http://stylelint.io/user-guide/complementary-tools/#build-tool-plugins)
* [Editor plugins](http://stylelint.io/user-guide/complementary-tools/#editor-plugins)

## Info
* http://cssguidelin.es/

## [Update & Publish to NPM](https://docs.npmjs.com/cli/version)
```npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]```

```npm publish```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
