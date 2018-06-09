import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import RadioGroup from './../../../../src/client/js/components/radio/radio-group';
import Radio from './../../../../src/client/js/components/radio/radio';
import renderer from 'react-test-renderer';

describe('<RadioGroup />', function() {
  this.getComponent = () => {
    return (
      <RadioGroup
        onChange={this.onChange}
        label={this.label}
        items={this.items}
      />
    );
  };

  this.items = [
    {
      label: 'Radio option 1',
      value: 'rad_1',
      checked: true
    },
    {
      label: 'Radio option 2',
      value: 'rad_2'
    },
    {
      label: 'Radio option 3',
      value: 'rad_3',
      disabled: true
    }
  ];

  beforeEach(() => {
    this.onChange = jest.fn();
    this.label = 'Radio Group';
  });

  it('Should render <RadioGroup />', () => {
    const radioGroup = renderer.create(this.getComponent()).toJSON();
    expect(radioGroup).toMatchSnapshot();
  });

  it('Should not call onChange for selected item', () => {
    const wrapper = mount(this.getComponent());
    wrapper
      .find(Radio)
      .first()
      .simulate('click');
    expect(this.onChange).not.toHaveBeenCalled();
  });

  it('Should call onChange for unselected item', () => {
    const wrapper = mount(this.getComponent());
    wrapper
      .find(Radio)
      .at(1)
      .simulate('click');
    expect(this.onChange).toHaveBeenCalledTimes(1);
    expect(this.onChange).toHaveBeenCalledWith(this.items[1].value);
  });

  it('Should not call onChange for disabled items', () => {
    const wrapper = mount(this.getComponent());
    wrapper
      .find(Radio)
      .at(2)
      .simulate('click');
    expect(this.onChange).not.toHaveBeenCalled();
  });
});
