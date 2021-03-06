import ui from './../../../src/client/js/reducers/ui-reducers';
import items from './../../../src/client/js/reducers/items-reducers';

import reducer from './../../../src/client/js/reducers/reducer';
import appInitialState from './../../../src/client/js/app-state/app-initial-state';

jest.mock('./../../../src/client/js/reducers/ui-reducers');
jest.mock('./../../../src/client/js/reducers/items-reducers');

describe('Reducers - main reducer', function() {
  it('Should call all reducer functions', () => {
    const newState = reducer(appInitialState, {
      type: 'unknown'
    });

    expect(ui).toHaveBeenCalled();
    expect(items).toHaveBeenCalled();
  });

  it('Should call all reducer functions with appInitialState as default', () => {
    const newState = reducer(undefined, {
      type: 'unknown'
    });

    expect(ui).toHaveBeenCalled();
    expect(items).toHaveBeenCalled();
  });
});
