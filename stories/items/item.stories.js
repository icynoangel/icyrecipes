import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Item from './../../src/client/js/components/items/item';
import Immutable from 'immutable';

const item = Immutable.fromJS({
    itemImage: '/boat.jpg',
    itemTitle: 'Boat',
    itemDescription: 'Lonely boat'
  });

storiesOf('Items', module)
  .add('Item', 
    withInfo()( () => {
      return <Item item={item} />;
    })
  );
