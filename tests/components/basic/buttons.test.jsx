import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './../../../src/js/components/basic/buttons';
import renderer from 'react-test-renderer';

describe('<Buttons />', function() {
  this.props = {
    getItems: jest.fn()
  };
  this.getComponent = props => {
    return <Buttons {...this.props} />;
  };

  it('Should render <Buttons />', () => {
    const buttons = renderer.create(this.getComponent()).toJSON();

    expect(buttons).toMatchSnapshot();
  });
});
