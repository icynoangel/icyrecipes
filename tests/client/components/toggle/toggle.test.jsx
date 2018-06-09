import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Toggle from './../../../../src/client/js/components/toggle/toggle';
import renderer from 'react-test-renderer';

describe('<Toggle />', function() {
  this.getComponent = (checked = false, disabled = false) => {
    return (
      <Toggle
        onClick={this.onClick}
        label={this.label}
        checked={checked}
        disabled={disabled}
      />
    );
  };

  beforeEach(() => {
    this.onClick = jest.fn();
    this.label = 'Toggle Button';
  });

  it('Should render <Toggle />', () => {
    const toggle = renderer.create(this.getComponent()).toJSON();
    expect(toggle).toMatchSnapshot();
  });

  it('Should render a checked <Toggle />', () => {
    const toggle = renderer.create(this.getComponent(!!'checked')).toJSON();
    expect(toggle).toMatchSnapshot();
  });

  it('Should render a disabled <Toggle />', () => {
    const toggle = renderer
      .create(this.getComponent(!'checked', !!'disabled'))
      .toJSON();
    expect(toggle).toMatchSnapshot();
  });

  it('Should render a checked and disabled <Toggle />', () => {
    const toggle = renderer
      .create(this.getComponent(!!'checked', !!'disabled'))
      .toJSON();
    expect(toggle).toMatchSnapshot();
  });

  it('Should change state when clicked and call onClick prop', () => {
    const wrapper = shallow(this.getComponent());
    wrapper.find('.toggle').simulate('click');
    expect(this.onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.state('checked')).toBe(true);
  });

  it('Should not change state and not call onClick prop when clicked and is disabled', () => {
    const wrapper = shallow(this.getComponent(!'checked', !!'disabled'));
    wrapper.find('.toggle').simulate('click');
    expect(this.onClick).not.toHaveBeenCalled();
    expect(wrapper.state('checked')).toBe(false);
  });
});
