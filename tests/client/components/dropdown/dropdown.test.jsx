import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import Dropdown from './../../../../src/client/js/components/dropdown/dropdown';
import renderer from 'react-test-renderer';
import enzymeToJson from 'enzyme-to-json';

describe('<Dropdown />', function() {
  this.getComponent = (items = this.items) => {
    return (
      <Dropdown
        onChange={this.onChange}
        placeholder={this.placeholder}
        items={items}
      />
    );
  };

  this.items = [
    {
      label: 'Select option 1',
      value: 'opt_1'
    },
    {
      label: 'Select option 2',
      value: 'opt_2'
    },
    {
      label: 'Select option 3',
      value: 'opt_3'
    },
    {
      label: 'Select option 4',
      value: 'opt_4'
    }
  ];

  beforeEach(() => {
    this.onChange = jest.fn();
    this.placeholder = 'Custom select';
  });

  it('Should render closed <Dropdown />', () => {
    const dropdown = renderer.create(this.getComponent()).toJSON();
    expect(dropdown).toMatchSnapshot();
  });

  it('Should render <Dropdown /> with default selected value', () => {
    const items = this.items.slice(0);
    items.push({
      label: 'Select option 5',
      value: 'opt_5',
      selected: true
    });
    const wrapper = mount(this.getComponent(items));
    wrapper.find('.dropdown__control').simulate('click');

    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('Should not call onChange for current selection', () => {
    const items = this.items.slice(0);
    items.push({
      label: 'Select option 5',
      value: 'opt_5',
      selected: true
    });
    const wrapper = mount(this.getComponent(items));
    wrapper.find('.dropdown__control').simulate('click');

    wrapper
      .find('.dropdown__content__option')
      .at(4)
      .simulate('click');

    expect(this.onChange).not.toHaveBeenCalled();
  });

  it('Should open dropdown', () => {
    const wrapper = mount(this.getComponent());
    wrapper.find('.dropdown__control').simulate('click');

    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('Should select a value and call onChange', () => {
    const wrapper = mount(this.getComponent());
    wrapper.find('.dropdown__control').simulate('click');

    wrapper
      .find('.dropdown__content__option')
      .at(2)
      .simulate('click');

    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('Should addEventListeners when mounting and removeEventListenrs when unmounting', () => {
    const addEventsSpy = jest.spyOn(Dropdown.prototype, 'addListeners');
    const removeEventsSpy = jest.spyOn(Dropdown.prototype, 'removeListeners');
    const wrapper = mount(this.getComponent());

    expect(addEventsSpy).toHaveBeenCalled();
    wrapper.unmount();
    expect(removeEventsSpy).toHaveBeenCalled();
  });

  it('Should close dropdown on document click', () => {
    const wrapper = mount(this.getComponent());
    wrapper.find('.dropdown__control').simulate('click');

    wrapper.instance().handleDocumentClick();

    expect(wrapper.state('isOpen')).toBe(false);
  });
});
