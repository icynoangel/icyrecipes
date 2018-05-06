import React, {Component} from 'react';
import { storiesOf } from '@storybook/react';
import _ from 'lodash';
import styles from './styles.common';

const colors = {
  '$black': '#000000',
  '$white': '#ffffff',
  '$transparent': 'rgba(0, 0, 0, 0)',
  '$mine-shaft': '#353535',
  '$gallery': '#eeeeee',
  '$alto': '#cecece',
  '$prussian-blue': '#002255',
  '$boulder': '#757575'
};

class Colors extends Component {
  
  get colors() {
    const colorsArray = [];

    _.each(colors, (val, key) => {
      const style = {
        backgroundColor: val,
        ...styles.color
      };
      colorsArray.push(
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <div style={{ width: '250px', ...styles.name}}>
            {key}
          </div>
          <div style={{ width: '250px', ...styles.name}}>
            {val}
          </div>
          <div style={style}>&nbsp;</div>
        </div>
      );
    });

    return colorsArray;    
  }

  render() {
    return (<div style={styles.main}>
      <h1>Colors</h1>

      <ul style={styles.ul}>
        {this.colors.map((el, i) => (
          <li key={i} style={styles.li}>{el}</li>
        ))}
      </ul>
    </div>);
  }
}


storiesOf('Styles', module)
  .add('Colors', () => {
    return <Colors colors={colors} />;
  });
