import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Items from './../../src/client/js/components/items/items';
import Immutable from 'immutable';

const items = Immutable.fromJS([
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
]);

storiesOf('Items', module)
  .add('Items', 
    withInfo()( () => {
      return <Items items={items} />;
    })
  );
