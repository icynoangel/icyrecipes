import React, {Component} from 'react';
import { storiesOf } from '@storybook/react';
import _ from 'lodash';
import styles from './styles.common';

const fonts = {
  '$font-extra-small': '1rem',
  '$font-smaller': '1.1rem',
  '$font-small': '1.2rem',
  '$font-light': '1.4rem',
  '$font-normal': '1.6rem',
  '$font-large': '1.8rem',
  '$font-large1': '2rem',
  '$font-large2': '2.2rem',
  '$font-larger': '2.4rem',
  '$font-extra-large': '3rem',
  '$font-extra-extra-large': '3.6rem'
};

class Typography extends Component {
  
  get fonts() {
    const fontsArray = [];

    _.each(this.props.fonts, (val, key) => {
      fontsArray.push(
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <div style={{ width: '200px', ...styles.name}}>
            {key}
          </div>
          <div style={{ width: '100px', ...styles.name}}>
            {val}
          </div>
          <div style={{ 
            fontSize: val, 
            ...styles.name
          }}>This is a sample text</div>
        </div>
      );
    });

    return fontsArray;
  }

  render() {
    return (<div style={styles.main}>
      <h1>Typography</h1>

      <ul style={styles.ul}>
        {this.fonts.map((el, i) => (
          <li key={i} style={styles.li}>{el}</li>
        ))}
      </ul>
    </div>);
  }
}


storiesOf('Styles', module)
  .add('Typography', () => {
    return <Typography fonts={fonts} />;
  });
