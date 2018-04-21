import React from 'react';
import ReactDOM from 'react-dom';
import Item from './../../../src/js/components/items/item';
import Immutable from 'immutable';
import renderer from 'react-test-renderer';

describe('<Item />', function() {
  this.item = Immutable.fromJS({
    itemImage: '/boat.jpg',
    itemTitle: 'Boat',
    itemDescription: 'Lonely boat'
  });

  this.getComponent = () => {
    return <Item item={this.item} />;
  };

  it('Should render <Item />', () => {
    const item = renderer.create(this.getComponent()).toJSON();

    expect(item).toMatchSnapshot();
  });
});
