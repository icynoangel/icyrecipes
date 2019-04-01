import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    caption: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event, this);
    this.props.onClick();
  }

  render() {
    const modifier = `--${this.props.type}`;

    return (
      <button className={`button ${modifier}`} onClick={this.handleClick}>
        {this.props.caption}
      </button>
    );
  }
}

export default Button;
