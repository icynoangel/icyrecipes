import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Buttons from './../../src/js/components/basic/buttons';

storiesOf('Basic', module)
  .add('Buttons', 
    withInfo()( () => {
      return <Buttons 
        getItems={action('getItems')}
      />;
    })
  );
