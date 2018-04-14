import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from './../basic/button';

class Buttons extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="buttons">
        <Button
          key="button-request-items"
          onClick={this.props.getItems}
          caption="Get Items"
          type="primary"
        />
      </div>
    );
  }
}

export default Buttons;
