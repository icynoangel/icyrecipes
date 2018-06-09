import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Dropdown from './../../src/client/js/components/dropdown/dropdown';

const items = [
  {
    label: 'Select option 1',
    value: 'opt_1'
  },{
    label: 'Select option 2',
    value: 'opt_2'
  },{
    label: 'Select option 3',
    value: 'opt_3'
  },{
    label: 'Select option 4',
    value: 'opt_4'
  }  
];

const itemsOneSelected = [
  {
    label: 'Select option 1',
    value: 'opt_1'
  },{
    label: 'Select option 2',
    value: 'opt_2'
  },{
    label: 'Select option 3',
    value: 'opt_3',
    selected: true
  },{
    label: 'Select option 4',
    value: 'opt_4'
  }  
];

storiesOf('Dropdown', module)
  .add('Dropdown no default selected', 
    withInfo()( () => {
      return <Dropdown 
        onChange={action('onChange')} 
        placeholder="Custom select..."
        items={items}
      />;
    })
  ).add('Dropdown default option selected', 
    withInfo()( () => {
      return <Dropdown 
        onChange={action('onChange')} 
        placeholder="Custom select..."
        items={itemsOneSelected}
      />;
    })
  );