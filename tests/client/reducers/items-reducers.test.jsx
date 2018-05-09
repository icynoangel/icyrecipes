import ACTIONS from './../../../src/client/js/actions/actions';
import items from './../../../src/client/js/reducers/items-reducers';

import appInitialState from './../../../src/client/js/app-state/app-initial-state';

describe('Reducers - items', function() {
  beforeEach(() => {
    this.itemsState = appInitialState.items;
  });

  it('Should handle RECEIVE_ITEMS action', () => {
    const response = {
      items: [
        {
          itemImage: '/boat.jpg',
          itemTitle: 'Boat',
          itemDescription: 'Lonely boat'
        },
        {
          itemImage: '/rain.jpg',
          itemTitle: 'Rain',
          itemDescription: 'Sunset rain'
        }
      ]
    };

    const newState = items(this.itemsState, {
      type: ACTIONS.RECEIVE_ITEMS,
      response
    });

    expect(newState.toJSON()).toEqual(response.items);
  });

  it('Should return the same state when unknown action', () => {
    const newState = items(this.itemsState, {
      type: 'unknown'
    });

    expect(newState.toJSON()).toEqual(this.itemsState.toJSON());
  });
});
