import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Toggle extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    label: 'Toggle',
    checked: false,
    disabled: false
  };

  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (!this.props.disabled) {
      this.setState(
        {
          checked: !this.state.checked
        },
        () => {
          this.props.onClick(this.state.checked);
        }
      );
    }
  }

  render() {
    const classes = classNames({
      toggle: true,
      '--checked': this.state.checked,
      '--disabled': this.props.disabled
    });

    return (
      <div className={classes} onClick={this.onClick}>
        <div className="toggle__toggle-button">
          <div className="toggle__toggle-button__slider" />
        </div>
        <div className="toggle__label">{this.props.label}</div>
      </div>
    );
  }
}

export default Toggle;
