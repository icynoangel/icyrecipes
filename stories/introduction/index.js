import React from 'react';
import {storiesOf} from '@storybook/react';

import Markdown from 'react-remarkable';

import Readme from '../../README.md';

const markdownOptions = {
  html: true,
  breaks: true
};

storiesOf('Introduction', module)
  .add('Getting started', () => {
    return <Markdown 
      source={Readme}
      options={markdownOptions} />
  });