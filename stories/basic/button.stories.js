import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './../../src/js/components/basic/button';

storiesOf('Basic', module)
  .add('Primary button', 
    withInfo()( () => {
      return <Button 
        onClick={action('clicked')} 
        caption="Primary Button"
        type="primary" 
      />;
    })
  )
  .add('Secondary button', 
    withInfo()( () => {
    return <Button 
      onClick={action('clicked')} 
      caption="Secondary Button"
      type="secondary" 
    />;
    })
  );

