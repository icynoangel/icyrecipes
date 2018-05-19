import React, {Component} from 'react';
import { storiesOf } from '@storybook/react';
import _ from 'lodash';
import {styles, StoriesGrid} from './../stories.common';

import colors from '!mk-sass-variables-loader!./../../src/client/css/colors.scss'; // eslint-disable-line

class Colors extends Component {
  
  get colors() {
    const colorsArray = [];

    _.each(colors, (val, key) => {
      const style = {
        backgroundColor: val,
        ...styles.color
      };
      colorsArray.push(
        <div style={styles.item}>
          <div style={{ width: '250px', ...styles.name}}>
            ${key}
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
    return <StoriesGrid
      title="Colors"
      items={this.colors}
    />;
  }
}


storiesOf('Styles', module)
  .add('Colors', () => {
    return <Colors colors={colors} />;
  });
