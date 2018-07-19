import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Adapter from './../../src/client/js/components/adapter/adapter';

class Hello extends Component {
  render() {
    return <div>Counter: {this.props.counter}</div>
  }
}

class Container extends Component {
  constructor() {
    super();
    this.adapterRef = React.createRef();
    this.counter = 1;
  }

  render() {
    return <div id="wrapper-container"></div>;
  }

  increment() {
    setInterval(() => {
      this.adapterRef.current.updateProps({counter: ++this.counter});
    }, 1000);
  }

  componentDidMount() {
    
    ReactDOM.render(
      <Adapter counter={this.counter} component={Hello} ref={this.adapterRef} />,
      document.getElementById('wrapper-container')
    );

    this.increment();
  }
}

storiesOf('Adapter', module)
  .add('Adapter to use with other view frameworks', 
    withInfo({
      text: `Markup of Adapter component

        <Adapter counter={this.counter} component={Hello} />
      `,
      source: false,
      propTables: [Adapter],
      propTablesExclude: [Container, Hello],
    })( () => {
      return <Container />;
    })
  );

