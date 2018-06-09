import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import RadioGroup from './../../src/client/js/components/radio/radio-group';

const items = [
  {
    label: 'Radio option 1',
    value: 'rad_1',
    checked: true
  },{
    label: 'Radio option 2',
    value: 'rad_2'
  },{
    label: 'Radio option 3',
    value: 'rad_3',
    disabled: true
  }  
];

storiesOf('Radio', module)
  .add('Radio Group', 
    withInfo()( () => {
      return <RadioGroup 
        onChange={action('onChange')} 
        label="Radio group"
        items={items}
      />;
    })
  );