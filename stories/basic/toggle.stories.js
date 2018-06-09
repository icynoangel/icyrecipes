import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Toggle from './../../src/client/js/components/basic/toggle';

storiesOf('Basic', module)
  .add('Toggle active', 
    withInfo()( () => {
      return <Toggle 
        onClick={action('clicked')} 
        label="Toggle button active"
      />;
    })
  ).add('Toggle active checked from the start', 
    withInfo()( () => {
      return <Toggle 
        onClick={action('clicked')}
        checked={true} 
        label="Toggle button active"
      />;
    })
  ).add('Toggle disabled', 
    withInfo()( () => {
      return <Toggle 
        onClick={action('clicked')}
        disabled={true} 
        label="Toggle button disabled"
      />;
    })
  ).add('Toggle checked disabled', 
    withInfo()( () => {
      return <Toggle 
        onClick={action('clicked')}
        checked={true} 
        disabled={true} 
        label="Toggle button checked disabled"
      />;
    })
  );

