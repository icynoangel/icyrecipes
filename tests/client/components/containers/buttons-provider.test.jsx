import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount} from 'enzyme';
import React from 'react';

import ButtonsProvider from '../../../../src/client/js/components/containers/buttons-provider';
import Buttons from '../../../../src/client/js/components/button/buttons';
import appInitialState from '../../../../src/client/js/app-state/app-initial-state';

import {getItems} from '../../../../src/client/js/actions/items-actions';

jest.unmock('redux');
jest.unmock('react-redux');

jest.mock('../../../../src/client/js/actions/items-actions');

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
    const gi = wrapper.find(Buttons).prop('getItems');

    expect(typeof gi == 'function').toBe(true);

    gi();
    expect(getItems).toHaveBeenCalled();
  });
});
