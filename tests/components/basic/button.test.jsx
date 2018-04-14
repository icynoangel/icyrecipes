import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Button from './../../../src/js/components/basic/button';

describe('<Button />', function() {
  this.getComponent = type => {
    return <Button onClick={this.onClick} caption={this.caption} type={type} />;
  };

  beforeEach(() => {
    this.onClick = jest.fn();
    this.caption = 'Get Items';
  });

  it('Should render <Button />', () => {
    shallow(this.getComponent('primary'));
  });

  it('Should render a primary Button', () => {
    const wrapper = shallow(this.getComponent('primary'));
    expect(wrapper.find('.button').hasClass('--primary')).toEqual(true);
  });

  it('Should render a secondary Button', () => {
    const wrapper = shallow(this.getComponent('secondary'));
    expect(wrapper.find('.button').hasClass('--secondary')).toEqual(true);
  });

  it('Should render button caption', () => {
    const wrapper = shallow(this.getComponent('secondary'));
    const caption = wrapper.find('.button__caption');
    expect(caption.length).toEqual(1);
    expect(caption.text()).toEqual(this.caption);
  });

  it('Should call onClick function', () => {
    const wrapper = shallow(this.getComponent('secondary'));
    wrapper.find('button').simulate('click');
    expect(this.onClick).toHaveBeenCalledTimes(1);
  });
});
