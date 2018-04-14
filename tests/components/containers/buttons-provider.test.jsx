import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount} from 'enzyme';
import React from 'react';

import ButtonsProvider from '../../../src/js/components/containers/buttons-provider';
import Buttons from '../../../src/js/components/basic/buttons';
import appInitialState from '../../../src/js/app-state/app-initial-state';

describe('Providers - ButtonsProvider', function() {
  beforeEach(() => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    this.store = mockStore(appInitialState);
  });

  it('Should render ButtonsProvider', () => {
    const wrapper = mount(<ButtonsProvider store={this.store} />);
    expect(wrapper.find(ButtonsProvider).length).toEqual(1);
  });

  it('Should pass getItems as prop', () => {
    const wrapper = mount(<ButtonsProvider store={this.store} />);

    const getItems = wrapper.find(Buttons).prop('getItems');
    expect(typeof getItems == 'function').toBe(true);
  });
});
