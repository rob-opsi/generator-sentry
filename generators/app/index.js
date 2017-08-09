'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  initializing() {
    this.composeWith(require.resolve('../component'), {});
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the ${chalk.blue('generator-sentry')} generator!`));

    this.log(
      `This api is subject to change, call with ${chalk.red(
        'yo sentry:component'
      )} to generate a component`
    );
  }
};
