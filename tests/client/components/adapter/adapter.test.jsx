import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import Adapter from './../../../../src/client/js/components/adapter/adapter';
import enzymeToJson from 'enzyme-to-json';

describe('<Adapter />', function() {
  this.getComponent = type => {
    return <Adapter counter={this.counter} component={this.component} />;
  };

  beforeEach(() => {
    this.counter = 1;
    this.component = function(props) {
      return <div>{props.counter}</div>;
    };
  });

  it('Should render wrapped component', () => {
    const wrapper = mount(this.getComponent());
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render wrapped component and update its props', () => {
    const wrapper = mount(this.getComponent());
    wrapper.instance().updateProps({counter: 3});
    wrapper.update();
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });
});
