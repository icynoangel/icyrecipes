import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import DatePicker from './../../../../src/client/js/components/datepicker/datepicker';
import enzymeToJson from 'enzyme-to-json';

describe('<Datepicker />', function() {
  beforeEach(() => {
    this.onSelect = jest.fn();
  });

  it('Should render <Datepicker />', () => {
    const wrapper = mount(
      <DatePicker
        onSelect={this.onSelect}
        selectedDay={new Date(Date.UTC(2018, 3, 5))}
      />
    );
    wrapper.find('input').simulate('focus');
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render <Datepicker /> with startYear and endYear', () => {
    const wrapper = mount(
      <DatePicker
        onSelect={this.onSelect}
        selectedDay={new Date(Date.UTC(2018, 3, 5))}
        startYear={2014}
        endYear={2020}
      />
    );
    wrapper.find('input').simulate('focus');
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render <Datepicker /> no year month selection', () => {
    const wrapper = mount(
      <DatePicker
        onSelect={this.onSelect}
        selectedDay={new Date(Date.UTC(2018, 3, 5))}
        startYear={2014}
        endYear={2020}
        showYearMonthSelection={false}
      />
    );
    wrapper.find('input').simulate('focus');
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });
  it('Should render <Datepicker /> with disabled days', () => {
    const wrapper = mount(
      <DatePicker
        onSelect={this.onSelect}
        selectedDay={new Date(Date.UTC(2018, 3, 5))}
        startYear={2014}
        endYear={2020}
        disabledDays={[
          {
            from: new Date(Date.UTC(2018, 3, 12)),
            to: new Date(Date.UTC(2018, 3, 16))
          }
        ]}
      />
    );
    wrapper.find('input').simulate('focus');
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('Should change picker when input value is changed', () => {
    const wrapper = mount(
      <DatePicker
        onSelect={this.onSelect}
        selectedDay={new Date(Date.UTC(2018, 3, 5))}
        startYear={2014}
        endYear={2020}
      />
    );
    wrapper.find('input').simulate('change', {
      target: {
        value: '10-10-2018'
      }
    });
    expect(this.onSelect).toHaveBeenCalled();
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('Should not change picker when disabled date is selected', () => {
    const wrapper = mount(
      <DatePicker
        onSelect={this.onSelect}
        selectedDay={new Date(Date.UTC(2018, 3, 5))}
        startYear={2014}
        endYear={2020}
        disabledDays={[
          {
            from: new Date(Date.UTC(2018, 3, 12)),
            to: new Date(Date.UTC(2018, 3, 16))
          }
        ]}
      />
    );
    wrapper.find('input').simulate('change', {
      target: {
        value: '3-13-2018'
      }
    });
    expect(this.onSelect).toHaveBeenCalledWith(undefined);
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('Should not call onSelect when disabled date is selected', () => {
    const wrapper = mount(
      <DatePicker
        onSelect={this.onSelect}
        selectedDay={new Date(Date.UTC(2018, 3, 5))}
        startYear={2014}
        endYear={2020}
        disabledDays={[
          {
            from: new Date(Date.UTC(2018, 3, 12)),
            to: new Date(Date.UTC(2018, 3, 16))
          }
        ]}
      />
    );
    wrapper.instance().onDayChange(new Date(2018, 3, 12), {disabled: true});

    expect(this.onSelect).not.toHaveBeenCalled();
  });

  it('Should change selected month', () => {
    const wrapper = mount(
      <DatePicker
        onSelect={this.onSelect}
        selectedDay={new Date(Date.UTC(2018, 3, 5))}
        startYear={2014}
        endYear={2020}
        disabledDays={[
          {
            from: new Date(Date.UTC(2018, 3, 12)),
            to: new Date(Date.UTC(2018, 3, 16))
          }
        ]}
      />
    );

    const month = new Date(Date.UTC(2018, 8, 1));
    wrapper.instance().onMonthYearChange(month);

    expect(wrapper.state('selectedMonth')).toEqual(month);
  });

  it('Should not update state if selectedDay is the same', () => {
    const selectedDay = new Date(Date.UTC(2018, 3, 5));
    const wrapper = mount(
      <DatePicker onSelect={this.onSelect} selectedDay={selectedDay} />
    );

    const stateSpy = jest.spyOn(wrapper.instance(), 'setState');
    wrapper.setProps({selectedDay: selectedDay});

    expect(stateSpy).not.toHaveBeenCalled();
  });
});
