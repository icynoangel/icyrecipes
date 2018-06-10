import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import YearMonthSelection from './../../../../src/client/js/components/datepicker/year-month-selection';
import Dropdown from './../../../../src/client/js/components/dropdown/dropdown';
import enzymeToJson from 'enzyme-to-json';

describe('<YearMonthSelection />', function() {
  beforeEach(() => {
    this.onChange = jest.fn();
    this.fromMonth = new Date(2014, 1, 1);
    this.toMonth = new Date(2018, 11, 1);
    this.selectedDay = new Date(2018, 5, 10);
  });

  it('Should render <YearMonthSelection />', () => {
    const wrapper = mount(
      <YearMonthSelection
        onChange={this.onChange}
        fromMonth={this.fromMonth}
        toMonth={this.toMonth}
        selectedDay={this.selectedDay}
      />
    );
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('Should call onChange when changing month', () => {
    const wrapper = mount(
      <YearMonthSelection
        onChange={this.onChange}
        fromMonth={this.fromMonth}
        toMonth={this.toMonth}
        selectedDay={this.selectedDay}
      />
    );

    wrapper
      .find(Dropdown)
      .first()
      .prop('onChange')(10);
    expect(this.onChange).toHaveBeenCalledWith(
      new Date(wrapper.state('year'), 10)
    );
  });

  it('Should not call onChange when changing month and year not set', () => {
    const wrapper = mount(
      <YearMonthSelection
        onChange={this.onChange}
        fromMonth={this.fromMonth}
        toMonth={this.toMonth}
        selectedDay={this.selectedDay}
      />
    );

    wrapper.setState({year: null});
    wrapper
      .find(Dropdown)
      .first()
      .prop('onChange')(10);
    expect(this.onChange).not.toHaveBeenCalled();
  });

  it('Should call onChange when changing year', () => {
    const wrapper = mount(
      <YearMonthSelection
        onChange={this.onChange}
        fromMonth={this.fromMonth}
        toMonth={this.toMonth}
        selectedDay={this.selectedDay}
      />
    );

    wrapper
      .find(Dropdown)
      .last()
      .prop('onChange')(2017);
    expect(this.onChange).toHaveBeenCalledWith(
      new Date(2017, wrapper.state('month'))
    );
  });

  it('Should not call onChange when changing year and month not set', () => {
    const wrapper = mount(
      <YearMonthSelection
        onChange={this.onChange}
        fromMonth={this.fromMonth}
        toMonth={this.toMonth}
        selectedDay={this.selectedDay}
      />
    );

    wrapper.setState({month: null});
    wrapper
      .find(Dropdown)
      .last()
      .prop('onChange')(2017);
    expect(this.onChange).not.toHaveBeenCalled();
  });

  it('Should not update state if selectedDay is the same', () => {
    const wrapper = mount(
      <YearMonthSelection
        onChange={this.onChange}
        fromMonth={this.fromMonth}
        toMonth={this.toMonth}
        selectedDay={this.selectedDay}
      />
    );

    const stateSpy = jest.spyOn(wrapper.instance(), 'setState');
    wrapper.setProps({selectedDay: this.selectedDay});

    expect(stateSpy).not.toHaveBeenCalled();
  });
});
