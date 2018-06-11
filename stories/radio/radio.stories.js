import React, {Component} from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Radio from './../../src/client/js/components/radio/radio';

class RadioContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(value) {
    this.setState((prevState) => {
      return {
        checked: !prevState.checked
      };
    }, () => {
      action( `${value} checked=${this.state.checked}`)();
    });
  }

  render() {
    return React.cloneElement(
      React.Children.only(this.props.children),
      {
        checked: this.state.checked,
        onClick: this.toggle
      }
    );
  }
}

storiesOf('Radio', module)
  .add('Radio active', 
    withInfo({
      text: 'Radio will only accept to be checked, it will not uncheck itself',
      propTables: [Radio],
      propTablesExclude: [RadioContainer]
    })( () => {
      return <RadioContainer checked={false}>
        <Radio 
          label="Radio button active"
          value="radio_val"
        />
      </RadioContainer>;
    })
  ).add('Radio active checked', 
    withInfo({
      text: 'Radio will only accept to be checked, it will not uncheck itself',
      propTables: [Radio],
      propTablesExclude: [RadioContainer]
    })( () => {
      return <RadioContainer checked={true}>
        <Radio 
          label="Radio button checked"
          value="radio_val"
        />
      </RadioContainer>;
    })
  ).add('Radio disabled', 
    withInfo({
      propTables: [Radio],
      propTablesExclude: [RadioContainer]
    })( () => {
      return <RadioContainer checked={false}>
        <Radio 
          disabled={true}
          label="Radio button disabled"
          value="radio_val"
        />
      </RadioContainer>;
    })
  ).add('Radio checked disabled', 
    withInfo({
      propTables: [Radio],
      propTablesExclude: [RadioContainer]
    })( () => {
      return <RadioContainer checked={true}>
        <Radio 
          disabled={true}
          label="Radio button active"
          value="radio_val"
        />
      </RadioContainer>;
    })
  );

