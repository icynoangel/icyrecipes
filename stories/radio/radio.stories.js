import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Radio from './../../src/client/js/components/radio/radio';

storiesOf('Radio', module)
  .add('Radio active', 
    withInfo()( () => {
      return <Radio 
        onClick={action('clicked')} 
        label="Radio button active"
        value="radio_val"
      />;
    })
  ).add('Radio active checked', 
    withInfo()( () => {
      return <Radio
        onClick={action('clicked')}
        checked={true} 
        label="Radio button checked"
        value="radio_val"
      />;
    })
  ).add('Radio disabled', 
    withInfo()( () => {
      return <Radio 
        onClick={action('clicked')}
        disabled={true} 
        label="Radio button disabled"
        value="radio_val"
      />;
    })
  ).add('Radio checked disabled', 
    withInfo()( () => {
      return <Radio 
        onClick={action('clicked')}
        checked={true} 
        disabled={true} 
        label="Radio button checked disabled"
        value="radio_val"
      />;
    })
  );

