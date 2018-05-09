import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './../../src/client/js/app';

jest.unmock('redux');
jest.unmock('react-redux');

describe('<App />', function() {
  it('Should render <App />', () => {
    shallow(<App />);
  });
});
