import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Notification from './../../src/client/js/components/notification/notification';
import appInitialState from './../../src/client/js/app-state/app-initial-state';

storiesOf('Notification', module)
  .add('Notification', 
    withInfo()( () => {
      return <Notification ui={appInitialState.ui} />;
    })
  );
