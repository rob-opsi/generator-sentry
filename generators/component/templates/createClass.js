import React, {PropTypes} from 'react';
import classNames from 'classnames';
import '<%= cssPath %>';

const <%= name %> = React.createClass({
  propTypes: {
  },

  getDefaultProps() {
    return {};
  },

  getInitialState() {
    return {};
  },

  render() {
    let {className} = this.props;
    let {cx} = classNames('<%= className %>', className);

    return (
      <div className={cx}>
      </div>
    );
  }
});

export default <%= name %>;
