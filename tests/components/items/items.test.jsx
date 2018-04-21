import React from 'react';
import ReactDOM from 'react-dom';
import Items from './../../../src/js/components/items/items';
import Immutable from 'immutable';
import renderer from 'react-test-renderer';

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
    const items = renderer.create(this.getComponent(this.items)).toJSON();

    expect(items).toMatchSnapshot();
  });

  it('Should render no Item', () => {
    const itemsList = Immutable.fromJS([]);
    const items = renderer.create(this.getComponent(itemsList)).toJSON();

    expect(items).toMatchSnapshot();
  });
});
