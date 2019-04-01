import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Tab = ({content, onClick, className}) => {
  return <div className="tabbed__tab" onClick={onClick}>
    {content}
  </div>;
}

export class Carousel extends Component {
  static propTypes = {
    tabs: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.tabbedContainerRef = React.createRef();
    this.tabbedRef = React.createRef();
    this.arrowRef = React.createRef();
    
    this.state = {
      selectedTab: 0
    };
  }

  handleClick = (index) => {
    console.log(index);
  }

  scrollLeft = () => {
    const {i, currentWidth} = this.getScrollElementIndex('left');
    console.log(i);
    if (i) {
      this.scrollToIndex(i, currentWidth);
    }
  }

  scrollRight = () => {
    const {i, currentWidth} = this.getScrollElementIndex('right');
    console.log(i);
    if (i) {
      this.scrollToIndex(i, currentWidth);
    }
  }

  scrollToIndex = (index, currentWidth) => {
    const tabbed = this.tabbedRef.current;
    const tabbedContainer = this.tabbedContainerRef.current;
    

    tabbed.scrollLeft = currentWidth - tabbedContainer.offsetWidth + 1;
  }

  getScrollElementIndex = (side) => {
    const {dimensions} = this.state;
    let currentWidth = 0;
    let scroll = this.tabbedRef.current.scrollLeft;
    let width = this.tabbedContainerRef.current.offsetWidth;

    for(let i = 0; i < dimensions.length; i++) {
      currentWidth += dimensions[i].offsetWidth;
      if (side === 'left' && dimensions[i].offsetLeft <= scroll && currentWidth >= scroll) {
        return {
          i,
          currentWidth
        };
      }
      if (side === 'right' && dimensions[i].offsetLeft <= scroll + width && currentWidth >= scroll + width) {
        return {
          i,
          currentWidth
        };
      }
    }
    return {};
  }

  getArrows = () => {
    const tabbed = this.tabbedRef.current;
    let leftArrow;
    let rightArrow;

    if (tabbed.scrollLeft === 0) {
      leftArrow = false;
    } else {
      leftArrow = true;
    }
    if (tabbed.scrollLeft === tabbed.scrollWidth) {
      rightArrow = false;
    } else {
      rightArrow = true;
    }

    return {
      leftArrow,
      rightArrow
    };
  }

  initialize = () => {
    const tabbed = this.tabbedRef.current;
    const elements = Array.from(tabbed.querySelectorAll('.tabbed__tab'));
    const dimensions = elements.map((el) => {
      return {
        offsetWidth: el.offsetWidth,
        offsetLeft: el.offsetLeft
      };
    });

    this.setState({
      dimensions,
      ...this.getArrows()
    });
  } 

  componentDidMount = () => {
    this.initialize();
  }

  render() {
    const {leftArrow, rightArrow} = this.state;
    const items = this.props.tabs.map((element, index) => {
      return <Tab
        key={index}
        onClick={(index) => this.handleClick(index)}
        content={element} 
      />;
    })

    return <div className="tabbed-container" ref={this.tabbedContainerRef}>
      {leftArrow && <div className="tabbed-container__arrow" onClick={this.scrollLeft}>{'<'}</div>}
      <div className="tabbed" ref={this.tabbedRef}>
        {items}
      </div>
      {rightArrow && <div className="tabbed-container__arrow --right" onClick={this.scrollRight}>{'>'}</div>}
    </div>;
  }
  
}

export default Carousel;

