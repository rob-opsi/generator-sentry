# generator-sentry [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generate a sentry UI component

## Installation

First, install [Yeoman](http://yeoman.io) and generator-sentry using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-sentry
```

When inside of your sentry development directory, you can generate your new react component (and jest test, and storybook doc):

```bash
yo sentry:component ComponentName
```

By default this creates a new React class using `createClass`.
You can also generate a `es6` or `pure` component by using the `--type` option.

```bash
yo sentry:component ComponentName --type es6
```

## License

BSD-3-Clause © [Sentry]()


[npm-image]: https://badge.fury.io/js/generator-sentry.svg
[npm-url]: https://npmjs.org/package/generator-sentry
[travis-image]: https://travis-ci.org/getsentry/generator-sentry.svg?branch=master
[travis-url]: https://travis-ci.org/getsentry/generator-sentry
[daviddm-image]: https://david-dm.org/getsentry/generator-sentry.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/getsentry/generator-sentry
