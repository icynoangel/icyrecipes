import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import configureStore from './../../src/client/js/configureStore';

describe('configureStore', function() {
  it('Should return redux store', () => {
    expect(configureStore.store).toEqual('redux-store');
  });

  it('Should render Provider', () => {
    const provider = shallow(<configureStore.Provider />);
    expect(provider.html()).toEqual('<div class="react-redux-provider"></div>');
  });
});
