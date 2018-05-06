import React, {Component} from 'react';
import { storiesOf } from '@storybook/react';
import _ from 'lodash';
import styles from './styles.common';

const fonts = {
  '$georgia': '"Georgia", "Cambria", "Times New Roman", "Times", serif',
  '$helvetica': '"Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif',
  '$lucida-grande': '"Lucida Grande", "Tahoma", "Verdana", "Arial", sans-serif',
  '$monospace': '"Bitstream Vera Sans Mono", "Consolas", "Courier", monospace',
  '$verdana': '"Verdana", "Geneva", sans-serif'
};

class Fonts extends Component {
  
  get fonts() {
    const fontsArray = [];

    _.each(this.props.fonts, (val, key) => {
      fontsArray.push(
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <div style={{ width: '250px', ...styles.name}}>
            {key}
          </div>
          <div style={{ 
            fontFamily: val, 
            ...styles.name
          }}>This is a sample text</div>
        </div>
      );
    });

    return fontsArray;
  }

  render() {
    return (<div style={styles.main}>
      <h1>Fonts</h1>

      <ul style={styles.ul}>
        {this.fonts.map((el, i) => (
          <li key={i} style={styles.li}>{el}</li>
        ))}
      </ul>
    </div>);
  }
}


storiesOf('Styles', module)
  .add('Fonts', () => {
    return <Fonts fonts={fonts} />;
  });
