import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import configureStore from './../../src/client/js/configureStore';

describe('configureStore', function() {
  beforeAll(() => {
    this.storeConfig = configureStore();
  });

  it('Should return redux store', () => {
    expect(this.storeConfig.store).toEqual('redux-store');
  });

  it('Should render Provider', () => {
    const provider = shallow(<this.storeConfig.Provider />);
    expect(provider.html()).toEqual('<div class="react-redux-provider"></div>');
  });
});
