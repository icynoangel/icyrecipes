import React, {Component} from 'react';
import { storiesOf } from '@storybook/react';
import _ from 'lodash';
import {styles, StoriesGrid} from './../stories.common';

import fonts from '!mk-sass-variables-loader!./../../src/client/css/typography.scss'; // eslint-disable-line

class Fonts extends Component {
  
  get fonts() {
    const fontsArray = [];

    _.each(this.props.fonts, (val, key) => {
      // get only font family
      if(!key.includes('font-')) {
        fontsArray.push(
          <div style={{ marginBottom: "5px", marginTop: "5px" }}>
            <div style={{ width: '250px', ...styles.name}}>
              ${key}
            </div>
            <div style={{ 
              fontFamily: val, 
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
      title="Fonts"
      items={this.fonts}
    />;
  }
}


storiesOf('Styles', module)
  .add('Fonts', () => {
    return <Fonts fonts={fonts} />;
  });
