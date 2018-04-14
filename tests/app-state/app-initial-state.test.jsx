import appInitialState from './../../src/js/app-state/app-initial-state';
import Immutable from 'immutable';

describe('App initial state', function() {
  it('Should have items property', () => {
    expect(typeof appInitialState.items !== 'undefined').toBe(true);
    expect(Immutable.List.isList(appInitialState.items)).toBe(true);
  });

  it('Should have ui property', () => {
    expect(typeof appInitialState.ui !== 'undefined').toBe(true);
    expect(Immutable.Map.isMap(appInitialState.ui)).toBe(true);
  });

  it('Should have isFetching, didInvalidate, error, notification under ui', () => {
    expect(appInitialState.ui.has('isFetching')).toBe(true);
    expect(appInitialState.ui.has('didInvalidate')).toBe(true);
    expect(appInitialState.ui.has('error')).toBe(true);
    expect(appInitialState.ui.has('notification')).toBe(true);
  });

  it('Should have type and text under notification', () => {
    expect(appInitialState.ui.hasIn(['notification', 'type'])).toBe(true);
    expect(appInitialState.ui.hasIn(['notification', 'text'])).toBe(true);
  });
});
