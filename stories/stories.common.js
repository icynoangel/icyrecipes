import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class StoriesGrid extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    return <div style={styles.main}>
      <h1>{this.props.title}</h1>

      <ul style={styles.ul}>
        {this.props.items.map((el, i) => (
          <li key={i} style={styles.li}>{el}</li>
        ))}
      </ul>
    </div>
  }
}

export const styles = {
  ul: {
    display: "inline-block",
    listStyle: "none",
    margin: 0,
    padding: 0,
    textAlign: "left"
  },
  li: {
    borderTop: '1px solid black'
  },
  color: {
    border: '1px solid #333333',
    display: 'inline-block',
    height: '30px',
    width: '30px',
    paddingTop: '5px'
  },
  name: {
    color: '#333333',
    display: 'inline-block',
    height: '30px',
    marginLeft: '10px'
  },
  item: {
    marginBottom: "5px", 
    marginTop: "5px"
  }
};

