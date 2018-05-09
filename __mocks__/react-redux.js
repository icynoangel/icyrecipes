import React, {Component} from 'react';

class Provider extends Component {
  render() {
    return <div className="react-redux-provider">{this.props.children}</div>;
  }
}

export {
  Provider
};
