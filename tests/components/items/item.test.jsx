import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Item from './../../../src/js/components/items/item';
import Immutable from 'immutable';

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
    shallow(this.getComponent());
  });

  it('Should render image container and image element', () => {
    const wrapper = shallow(this.getComponent());
    expect(wrapper.find('.item__image').length).toEqual(1);
    expect(wrapper.find('.item__image').find('img').length).toEqual(1);
  });

  it('Should render item details', () => {
    const wrapper = shallow(this.getComponent());
    expect(wrapper.find('.item__details').length).toEqual(1);
  });

  it('Should render item title', () => {
    const wrapper = shallow(this.getComponent());
    expect(wrapper.find('.item__details').find('.item__title').length).toEqual(
      1
    );
    expect(
      wrapper
        .find('.item__details')
        .find('.item__title')
        .text()
    ).toEqual(this.item.get('itemTitle'));
  });

  it('Should render item description', () => {
    const wrapper = shallow(this.getComponent());
    expect(
      wrapper.find('.item__details').find('.item__description').length
    ).toEqual(1);
    expect(
      wrapper
        .find('.item__details')
        .find('.item__description')
        .text()
    ).toEqual(this.item.get('itemDescription'));
  });
});
