import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount} from 'enzyme';
import React from 'react';

import ItemsProvider from '../../../../src/client/js/components/containers/items-provider';
import Items from '../../../../src/client/js/components/items/items';
import appInitialState from '../../../../src/client/js/app-state/app-initial-state';

jest.unmock('redux');
jest.unmock('react-redux');

describe('Providers - ItemsProvider', function() {
  beforeEach(() => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    this.store = mockStore(appInitialState);
  });

  it('Should render ItemsProvider', () => {
    const wrapper = mount(<ItemsProvider store={this.store} />);
    expect(wrapper.find(ItemsProvider).length).toEqual(1);
  });

  it('Should pass state props', () => {
    const wrapper = mount(<ItemsProvider store={this.store} />);
    const items = wrapper.find(Items);

    expect(items.prop('items')).toEqual(appInitialState.items);
  });
});
