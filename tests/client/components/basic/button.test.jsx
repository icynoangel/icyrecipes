import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Button from './../../../../src/client/js/components/basic/button';
import renderer from 'react-test-renderer';

describe('<Button />', function() {
  this.getComponent = type => {
    return <Button onClick={this.onClick} caption={this.caption} type={type} />;
  };

  beforeEach(() => {
    this.onClick = jest.fn();
    this.caption = 'Get Items';
  });

  it('Should render a primary Button', () => {
    const button = renderer.create(this.getComponent('primary')).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('Should render a secondary Button', () => {
    const button = renderer.create(this.getComponent('secondary')).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('Should call onClick function', () => {
    const wrapper = shallow(this.getComponent('secondary'));
    wrapper.find('button').simulate('click');
    expect(this.onClick).toHaveBeenCalledTimes(1);
  });
});
