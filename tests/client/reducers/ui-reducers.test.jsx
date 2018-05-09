import ACTIONS from './../../../src/client/js/actions/actions';
import {NOTIFICATION} from './../../../src/client/js/config/constants';
import ui from './../../../src/client/js/reducers/ui-reducers';
import appInitialState from './../../../src/client/js/app-state/app-initial-state';

describe('Reducers - UI', function() {
  beforeEach(() => {
    this.uiState = appInitialState.ui;
  });

  it('Should handle REQUEST_ITEMS action', () => {
    const newState = ui(this.uiState, {
      type: ACTIONS.REQUEST_ITEMS
    });

    expect(newState.get('isFetching')).toBe(true);
    expect(newState.get('error')).toEqual(null);
    expect(newState.getIn(['notification', 'type'])).toEqual(
      NOTIFICATION.TYPES.PENDING
    );
    expect(newState.getIn(['notification', 'text'])).toEqual(
      'Requesting items...'
    );
  });

  it('Should handle RECEIVE_ITEMS action', () => {
    const response = {
      items: [
        {
          item: 'test'
        }
      ]
    };
    const uiState = this.uiState
      .set('isFetching', true)
      .setIn(['notification', 'type'], NOTIFICATION.TYPES.PENDING)
      .setIn(['notification', 'text'], 'Requesting items...');

    const newState = ui(uiState, {
      type: ACTIONS.RECEIVE_ITEMS,
      response
    });

    expect(newState.get('isFetching')).toBe(false);
    expect(newState.get('error')).toEqual(null);
    expect(newState.getIn(['notification', 'type'])).toEqual(
      NOTIFICATION.TYPES.SUCCESS
    );
    expect(newState.getIn(['notification', 'text'])).toEqual(
      'IcyRecipes Items'
    );
  });

  it('Should handle REQUEST_ERROR action', () => {
    const error = {
      message: 'error message'
    };

    const uiState = this.uiState
      .set('isFetching', true)
      .setIn(['notification', 'type'], NOTIFICATION.TYPES.PENDING)
      .setIn(['notification', 'text'], 'Requesting items...');

    const newState = ui(uiState, {
      type: ACTIONS.REQUEST_ERROR,
      error
    });

    expect(newState.get('isFetching')).toBe(false);
    expect(newState.get('error')).toEqual(error);
    expect(newState.getIn(['notification', 'type'])).toEqual(
      NOTIFICATION.TYPES.ERROR
    );
    expect(newState.getIn(['notification', 'text'])).toEqual(error.message);
  });

  it('Should handle SERVER_ERROR action', () => {
    const error = {
      message: 'error message'
    };

    const uiState = this.uiState
      .set('isFetching', true)
      .setIn(['notification', 'type'], NOTIFICATION.TYPES.PENDING)
      .setIn(['notification', 'text'], 'Requesting items...');

    const newState = ui(uiState, {
      type: ACTIONS.SERVER_ERROR,
      error
    });

    expect(newState.get('isFetching')).toBe(false);
    expect(newState.get('error')).toEqual(error);
    expect(newState.getIn(['notification', 'type'])).toEqual(
      NOTIFICATION.TYPES.ERROR
    );
    expect(newState.getIn(['notification', 'text'])).toEqual(
      'Request has failed. Please retry later.'
    );
  });

  it('Should return the same state when unknown action', () => {
    const newState = ui(this.uiState, {
      type: 'unknown'
    });

    expect(newState.toJSON()).toEqual(this.uiState.toJSON());
  });
});
