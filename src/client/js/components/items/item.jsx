import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const item = this.props.item;

    return (
      <div className="item">
        <div className="item__image">
          <img src={item.get('itemImage')} alt={item.get('itemDescription')} />
        </div>
        <div className="item-details">
          <div className="item-details__title">{item.get('itemTitle')}</div>
          <div className="item-details__description">
            {item.get('itemDescription')}
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
