import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import FlydAdapter, {stream} from './../../src/client/js/components/flyd-adapter/flyd-adapter';

class Hello extends Component {
  render() {
    return <div>
      <div>Average: {this.props.average}</div>
      <div>
        {this.props.colors.map((color, index) => {
          return <div key={index}>Color: {color}</div>;
        })}
      </div>
    </div>
  }
}

class Container extends Component {
  constructor() {
    super();
    this.values = {
      average: 5,
      colors: ['blue', 'yellow']
    };

    this.properties = stream(this.values);
  }

  render() {
    return <div id="wrapper-container"></div>;
  }

  updateValues() {
    setTimeout(() => {
      const newValues = {
        average: 10,
        colors: ['red', 'green']
      }
      this.properties(newValues);
    }, 5000);
  }

  componentDidMount() {
    
    ReactDOM.render(
      <FlydAdapter stream={this.properties} component={Hello} />,
      document.getElementById('wrapper-container')
    );

    this.updateValues();
  }
}

storiesOf('FlydAdapter', module)
  .add('FlydAdapter to use with other view frameworks', 
    withInfo({
      text: `Markup of FlydAdapter component

        <FlydAdapter stream={this.properties} component={Hello} />
      `,
      source: false,
      propTables: [FlydAdapter],
      propTablesExclude: [Container, Hello],
    })( () => {
      return <Container />;
    })
  );

