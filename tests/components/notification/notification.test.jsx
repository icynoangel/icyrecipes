import React from 'react';
import ReactDOM from 'react-dom';
import Notification from './../../../src/js/components/notification/notification';
import appInitialState from './../../../src/js/app-state/app-initial-state';
import renderer from 'react-test-renderer';

describe('<Notification />', function() {
  this.getComponent = () => {
    return <Notification ui={this.ui} />;
  };

  beforeEach(() => {
    this.ui = appInitialState.ui;
  });

  it('Should render <Notification />', () => {
    const notification = renderer.create(this.getComponent()).toJSON();

    expect(notification).toMatchSnapshot();
  });
});
