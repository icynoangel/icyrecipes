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

const itemsTiny = [
  {
    label: '2018',
    value: 2018
  },{
    label: '2019',
    value: 2019
  },{
    label: '2020',
    value: 2020
  },{
    label: '2021',
    value: 2021
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
  ).add('Dropdown tiny', 
    withInfo()( () => {
      return <Dropdown 
        onChange={action('onChange')} 
        placeholder="Custom select..."
        type="tiny"
        items={itemsOneSelected}
      />;
    })
  ).add('Dropdown tiny width auto', 
    withInfo()( () => {
      return <Dropdown 
        onChange={action('onChange')} 
        placeholder="Year"
        type="tiny"
        width="auto"
        items={itemsTiny}
      />;
    })
  );