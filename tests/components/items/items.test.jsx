import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Item from './../../../src/js/components/items/item';
import Items from './../../../src/js/components/items/items';
import Immutable from 'immutable';

describe('<Items />', function() {
  this.items = Immutable.fromJS([
    {
      itemImage: '/boat.jpg',
      itemTitle: 'Boat',
      itemDescription: 'Lonely boat'
    },
    {
      itemImage: '/rain.jpg',
      itemTitle: 'Rain',
      itemDescription: 'Sunset rain'
    }
  ]);

  this.getComponent = items => {
    return <Items items={items} />;
  };

  it('Should render <Items />', () => {
    shallow(this.getComponent(this.items));
  });

  it('Should render 2 Item components', () => {
    const wrapper = shallow(this.getComponent(this.items));
    expect(wrapper.find(Item).length).toEqual(2);
  });

  it('Should render no Item', () => {
    const items = Immutable.fromJS([]);
    const wrapper = shallow(this.getComponent(items));
    expect(wrapper.find(Item).length).toEqual(0);
  });
});
