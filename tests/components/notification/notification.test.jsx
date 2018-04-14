import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Notification from './../../../src/js/components/notification/notification';
import appInitialState from './../../../src/js/app-state/app-initial-state';
import {NOTIFICATION} from './../../../src/js/config/constants';
import Immutable from 'immutable';

describe('<Notification />', function() {
  this.getComponent = () => {
    return <Notification ui={this.ui} />;
  };

  beforeEach(() => {
    this.ui = appInitialState.ui;
  });

  it('Should render <Notification />', () => {
    shallow(this.getComponent());
  });

  it('Should render notification container', () => {
    const wrapper = shallow(this.getComponent());
    expect(wrapper.find('.notification').length).toEqual(1);
  });

  it('Should render notification content', () => {
    const wrapper = shallow(this.getComponent());
    expect(wrapper.find('.notification__content').length).toEqual(1);
    expect(wrapper.find('.notification__content').text()).toEqual(
      this.ui.getIn(['notification', 'text'])
    );
  });
});
