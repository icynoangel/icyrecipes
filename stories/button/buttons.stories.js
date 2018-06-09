import React, {Component} from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Buttons from './../../src/client/js/components/button/buttons';

class ButtonsStory extends Component {

  constructor(props) {
    super(props);

    let modalContainer = document.getElementById('modal');

    if(!modalContainer) {
      modalContainer = document.createElement('div');
      modalContainer.setAttribute('id', 'modal');
      document.body.appendChild(modalContainer);
    }
  }

  render() {
    return (
      <Buttons 
        getItems={action('getItems')}
      />
    );
  }
}

storiesOf('Button', module)
  .add('Buttons', 
    withInfo({
      text: `Markup of Buttons

        <Buttons 
          getItems={action('getItems')}
        />
      `,
      source: false,
      propTables: [Buttons],
      propTablesExclude: [ButtonsStory],
    })( () => {
      return <ButtonsStory />;
    }) 
  );
