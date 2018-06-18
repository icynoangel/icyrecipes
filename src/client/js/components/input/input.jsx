import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  static propTypes = {
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    value: PropTypes.any.isRequired
  };

  static defaultProps = {
    onFocus: () => {},
    onChange: () => {},
    onBlur: () => {},
    onKeyDown: () => {},
    onKeyUp: () => {}
  };

  render() {
    return <input
      value={this.props.value}
      onFocus={this.props.onFocus}
      onChange={this.props.onChange}
      onBlur={this.props.onBlur}
      onKeyDown={this.props.onKeyDown}
      onKeyUp={this.props.onKeyUp}
       />
  }
}

export default Input;