import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount} from 'enzyme';
import React from 'react';

import NotificationProvider from '../../../../src/client/js/components/containers/notification-provider';
import Notification from '../../../../src/client/js/components/notification/notification';
import appInitialState from '../../../../src/client/js/app-state/app-initial-state';

jest.unmock('redux');
jest.unmock('react-redux');

describe('Providers - NotificationProvider', function() {
  beforeEach(() => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    this.store = mockStore(appInitialState);
  });

  it('Should render NotificationProvider', () => {
    const wrapper = mount(<NotificationProvider store={this.store} />);
    expect(wrapper.find(NotificationProvider).length).toEqual(1);
  });

  it('Should pass state props', () => {
    const wrapper = mount(<NotificationProvider store={this.store} />);
    const notification = wrapper.find(Notification);

    expect(notification.prop('ui')).toEqual(appInitialState.ui);
  });
});
