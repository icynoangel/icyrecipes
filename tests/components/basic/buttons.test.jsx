import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Buttons from './../../../src/js/components/basic/buttons';
import Button from './../../../src/js/components/basic/button';

describe('<Buttons />', function() {
  this.props = {
    getItems: jest.fn()
  };
  this.getComponent = props => {
    return <Buttons {...this.props} />;
  };

  it('Should render <Buttons />', () => {
    shallow(this.getComponent());
  });

  it('Should render <Buttons /> container', () => {
    const wrapper = shallow(this.getComponent());

    expect(wrapper.find('.buttons').length).toEqual(1);
  });

  it('Should render <Button />', () => {
    const wrapper = shallow(this.getComponent());
    const button = wrapper.find(Button);

    expect(button.length).toEqual(1);
    expect(button.props()).toEqual({
      onClick: this.props.getItems,
      caption: 'Get Items',
      type: 'primary'
    });
  });
});
