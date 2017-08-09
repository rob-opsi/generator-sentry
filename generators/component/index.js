'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const path = require('path');

// Can accept 'foo/bar/Component', treat last token as component name
const getComponentParts = path => {
  let parts = path && path.split('/');
  if (!parts || !parts.length) {
    return {};
  }

  let parentDirs = parts.slice(0, parts.length - 1);

  return {
    name: parts[parts.length - 1],
    parentPath: parentDirs.length > 0 ? `${parentDirs.join('/')}/` : ''
  };
};

const validateComponentName = str => {
  let {name} = getComponentParts(str);
  return (
    name && typeof name === 'string' && name.length && name[0] === name[0].toUpperCase()
  );
};

const validateComponentType = str => ['createClass', 'es6', 'pure'].includes(str);

const camelToHyphen = str =>
  str ? str.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`) : str;

const TPL = {
  spec: {
    path: 'tests/js/spec/components',
    ext: '.spec.jsx'
  },
  createClass: {
    path: 'src/sentry/static/sentry/app/components',
    ext: '.jsx'
  },
  storybook: {
    path: 'docs-ui/components',
    ext: '.stories.js'
  },
  less: {
    path: 'src/sentry/static/sentry/less/components',
    ext: '.less'
  }
};

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {
      type: String,
      required: false
    });
    this.option('type', {
      type: String,
      desc: 'One of: "createClass", "es6", or "pure"',
      default: 'createClass'
    });
  }

  initializing() {
    this.props = this.options;
  }

  prompting() {
    const prompts = [];

    if (!validateComponentName(this.options.name)) {
      prompts.push({
        type: 'input',
        name: 'name',
        message: 'Component name (in PascalCase)'
      });
    }

    if (!validateComponentType(this.options.type)) {
      prompts.push({
        type: 'input',
        name: 'type',
        message: 'One of "createClass", "es6", or "pure"'
      });
    }

    if (prompts.length) {
      return this.prompt(prompts).then(props => {
        Object.assign(this.props, props);
      });
    }
  }

  writing() {
    if (this.props.name && this.props.type) {
      // Check if destination path's package name is === sentry
      const pkg = this.fs.readJSON(this.destinationPath('package.json'), {});

      if (!pkg || !pkg.name || pkg.name.toLowerCase() !== 'sentry') {
        return this.log(
          chalk.red('You must been inside of the sentry project to use this.')
        );
      }

      this.log(
        `Creating react component + stories + jest specs + less: ${chalk.green(
          this.props.name
        )}`
      );

      const {name, parentPath} = getComponentParts(this.props.name);
      const fileName = `${name[0].toLowerCase()}${name.slice(1)}`;
      const className = camelToHyphen(fileName);
      const templates = ['spec', this.props.type || 'createClass', 'storybook', 'less'];

      templates.forEach(template => {
        const dest = TPL[template];
        let cssPath = path.relative(`${dest.path}/${parentPath}`, TPL.less.path);
        this.fs.copyTpl(
          this.templatePath(`${template}.js`),
          this.destinationPath(`${dest.path}/${parentPath}${fileName}${dest.ext}`),
          {
            name,
            fileName,
            cssPath: `${cssPath}/${parentPath}${fileName}.less`,
            className
          }
        );
      });
    }
  }

  install() {}
};
