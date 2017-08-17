import React, {PropTypes} from 'react';
import classNames from 'classnames';
import '<%= cssPath %>';

class <%= name %> extends React.PureComponent {
  static propTypes = {
  };

  render() {
    let {className} = this.props;
    let cx = classNames('<%= className %>', className);

    return (
      <div className={cx}>
      </div>
    );
  }
}

export default <%= name %>;
