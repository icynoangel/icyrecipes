import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Radio from './../../../../src/client/js/components/radio/radio';
import renderer from 'react-test-renderer';

describe('<Radio />', function() {
  this.getComponent = (checked = false, disabled = false) => {
    return (
      <Radio
        onClick={this.onClick}
        label={this.label}
        value={this.value}
        checked={checked}
        disabled={disabled}
      />
    );
  };

  beforeEach(() => {
    this.onClick = jest.fn();
    this.label = 'Radio Button';
    this.value = 'rad_val';
  });

  it('Should render <Radio />', () => {
    const radio = renderer.create(this.getComponent()).toJSON();
    expect(radio).toMatchSnapshot();
  });

  it('Should render a checked <Radio />', () => {
    const radio = renderer.create(this.getComponent(!!'checked')).toJSON();
    expect(radio).toMatchSnapshot();
  });

  it('Should render a disabled <Radio />', () => {
    const radio = renderer
      .create(this.getComponent(!'checked', !!'disabled'))
      .toJSON();
    expect(radio).toMatchSnapshot();
  });

  it('Should render a checked and disabled <Radio />', () => {
    const radio = renderer
      .create(this.getComponent(!!'checked', !!'disabled'))
      .toJSON();
    expect(radio).toMatchSnapshot();
  });

  it('Should call onClick prop', () => {
    const wrapper = shallow(this.getComponent());
    wrapper.find('.radio').simulate('click');
    expect(this.onClick).toHaveBeenCalledTimes(1);
    expect(this.onClick).toHaveBeenCalledWith(this.value);
  });

  it('Should not call onClick prop when it is disabled', () => {
    const wrapper = shallow(this.getComponent(!'checked', !!'disabled'));
    wrapper.find('.radio').simulate('click');
    expect(this.onClick).not.toHaveBeenCalled();
  });
});
