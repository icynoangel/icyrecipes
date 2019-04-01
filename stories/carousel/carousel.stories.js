import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Carrousel from './../../src/client/js/components/carrousel/carrousel';

storiesOf('Carrousel', module)
  .add('Carrousel', 
    withInfo()( () => {
      return <Carrousel 
        tabs={['TAB 1', 'TAB 2', 'TAB 3', 'TAB WIDER', 'TAB 5', 'TAB WIDE', 'TAB 7']} 
      />;
    })
  );
