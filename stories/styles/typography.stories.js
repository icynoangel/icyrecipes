import React, {Component} from 'react';
import { storiesOf } from '@storybook/react';
import _ from 'lodash';
import {styles, StoriesGrid} from './../stories.common';

import fonts from '!mk-sass-variables-loader!./../../src/client/css/typography.scss'; // eslint-disable-line

class Typography extends Component {
  
  get fonts() {
    const fontsArray = [];

    _.each(this.props.fonts, (val, key) => {
      // get only font sizes
      if(key.includes('font-') && !key.includes('font-stack')) {
        fontsArray.push(
          <div style={styles.item}>
            <div style={{ width: '200px', ...styles.name}}>
              ${key}
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
      }
    });

    return fontsArray;
  }

  render() {
    return <StoriesGrid
      title="Typography"
      items={this.fonts}
    />;
  }
}


storiesOf('Styles', module)
  .add('Typography', () => {
    return <Typography fonts={fonts} />;
  });
