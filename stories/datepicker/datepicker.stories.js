import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import DatePicker from './../../src/client/js/components/datepicker/datepicker';

storiesOf('Datepicker', module)
  .add('Datepicker default today selected', 
    withInfo()( () => {
      return <DatePicker 
        onSelect={action('onSelect')} 
      />;
    })
  ).add('Datepicker selected day', 
    withInfo()( () => {
      return <DatePicker 
        selectedDay={new Date(2018, 3, 5)}
        onSelect={action('onSelect')} 
      />;
    })
  ).add('Datepicker startYear and endYear', 
    withInfo()( () => {
      return <DatePicker 
        selectedDay={new Date(2018, 3, 5)}
        startYear={2014}
        endYear={2020}
        onSelect={action('onSelect')} 
      />;
    })
  ).add('Datepicker no yearMonthSelection', 
    withInfo()( () => {
      return <DatePicker 
        selectedDay={new Date(2018, 3, 5)}
        startYear={2014}
        endYear={2020}
        showYearMonthSelection={false}
        onSelect={action('onSelect')} 
      />;
    })
  ).add('Datepicker disabled days', 
    withInfo()( () => {
      return <DatePicker 
        selectedDay={new Date(2018, 3, 5)}
        startYear={2014}
        endYear={2020}
        disabledDays={[{
          from: new Date(2018, 3, 12), 
          to: new Date(2018, 3, 16) 
        }]}
        onSelect={action('onSelect')} 
      />;
    })
  );