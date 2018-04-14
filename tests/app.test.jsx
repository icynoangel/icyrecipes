import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './../src/js/app';

describe('<App />', function() {
  it('Should render <App />', () => {
    shallow(<App />);
  });
});
