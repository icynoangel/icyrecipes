import ACTIONS from './../../src/js/actions/actions';
import {
  requestItems,
  receiveItems,
  setRequestError,
  setServerError,
  getItems
} from './../../src/js/actions/items-actions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import config from './../../src/js/config/config';
import nock from 'nock';

jest.unmock('superagent');

describe('Actions - items sync', function() {
  it('Should return correct type from requestItems', () => {
    const expectedObj = {
      type: ACTIONS.REQUEST_ITEMS
    };
    expect(requestItems()).toEqual(expectedObj);
  });

  it('Should return correctly from receiveItems', () => {
    const response = 'response mock';
    const expectedObj = {
      type: ACTIONS.RECEIVE_ITEMS,
      response
    };
    expect(receiveItems(response)).toEqual(expectedObj);
  });

  it('Should return correctly from setRequestError', () => {
    const error = 'error mock';
    const expectedObj = {
      type: ACTIONS.REQUEST_ERROR,
      error
    };
    expect(setRequestError(error)).toEqual(expectedObj);
  });

  it('Should return correctly from setServerError', () => {
    const error = 'error mock';
    const expectedObj = {
      type: ACTIONS.SERVER_ERROR,
      error
    };
    expect(setServerError(error)).toEqual(expectedObj);
  });
});

describe('Actions - items async', function() {
  it('Should call getItems actions success flow', done => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const response = {
      items: [
        {
          // content
        }
      ]
    };

    const expectedActions = [
      {type: ACTIONS.REQUEST_ITEMS},
      {type: ACTIONS.RECEIVE_ITEMS, response}
    ];

    const store = mockStore({});

    nock(config.getServerUrl())
      .get('/items')
      .reply(200, response);

    store.dispatch(getItems()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('Should call getItems actions error flow', done => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const error = {
      code: 'error code',
      message: 'error message'
    };
    const response = {
      error: error
    };

    const expectedActions = [
      {type: ACTIONS.REQUEST_ITEMS},
      {type: ACTIONS.REQUEST_ERROR, error}
    ];

    const store = mockStore({});

    nock(config.getServerUrl())
      .get('/items')
      .reply(200, response);

    store.dispatch(getItems()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('Should call items actions server error flow', done => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const error = ['Error: Internal Server Error'];

    const expectedActions = [
      {type: ACTIONS.REQUEST_ITEMS},
      {type: ACTIONS.SERVER_ERROR, error}
    ];

    const store = mockStore({});

    nock(config.getServerUrl())
      .get('items')
      .reply(500, {});

    store.dispatch(getItems()).then(() => {
      // return of async actions
      const actions = store.getActions();
      expect(actions[0]).toEqual(expectedActions[0]);
      expect(actions[1].type).toEqual(expectedActions[1].type);
      done();
    });
  });
});
