import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import index from './../../src/client/js/index';
import App from './../../src/client/js/app';

jest.mock('./../../src/client/js/app');

describe('index', function() {
  it('Should render react-redux Provider and App', () => {
    const el = document.getElementById('root').innerHTML;

    expect(el.toString()).toEqual(
      '<div class="react-redux-provider"><div class="app">app content</div></div>'
    );
  });
});
