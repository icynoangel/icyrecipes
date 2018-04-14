import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NOTIFICATION} from './../../config/constants';

class Notification extends Component {
  static propTypes = {
    ui: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="notification">
        <div className="notification__content">
          {this.props.ui.getIn(['notification', 'text'])}
        </div>
      </div>
    );
  }
}

export default Notification;
