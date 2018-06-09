import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Dropdown extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    items: PropTypes.array.isRequired
  };

  static defaultProps = {
    placeholder: 'Select...'
  };

  static getDerivedStateFromProps(props) {
    const selected = props.items.find(item => {
      return item.selected;
    });

    if (selected) {
      return {
        selected: selected.value
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      isOpen: false
    };

    this.addListeners = this.addListeners.bind(this);
    this.removeListeners = this.removeListeners.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.controlOnClick = this.controlOnClick.bind(this);
  }

  addListeners() {
    window.addEventListener('click', this.handleDocumentClick, false);
    window.addEventListener('touchend', this.handleDocumentClick, false);
  }

  removeListeners() {
    window.removeEventListener('click', this.handleDocumentClick);
    window.removeEventListener('touchend', this.handleDocumentClick);
  }

  controlOnClick(event) {
    this.setState({
      isOpen: !this.state.isOpen
    });

    event.stopPropagation();
    event.preventDefault();
    return false;
  }

  handleDocumentClick() {
    this.setState({
      isOpen: false
    });
  }

  onClick(value) {
    if (this.state.selected !== value) {
      this.setState(
        {
          selected: value,
          isOpen: false
        },
        () => {
          this.props.onChange(value);
        }
      );
    }
  }

  get options() {
    return (
      <div className="dropdown__content">
        {this.props.items.map(item => {
          const classes = classNames({
            dropdown__content__option: true,
            '--selected': this.state.selected === item.value
          });
          return (
            <div
              key={`dropdown-option-${item.value}`}
              className={classes}
              onClick={this.onClick.bind(this, item.value)}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const selectedLabel =
      this.state.selected !== ''
        ? this.props.items.find(item => {
            return item.value === this.state.selected;
          }).label
        : this.props.placeholder;

    const classes = classNames({
      dropdown: true,
      '--open': this.state.isOpen
    });

    return (
      <div className={classes}>
        <div className="dropdown__control" onClick={this.controlOnClick}>
          <div className="dropdown__control__select">{selectedLabel}</div>
          <div className="dropdown__control__arrow" />
        </div>
        {this.state.isOpen && this.options}
      </div>
    );
  }

  componentDidMount() {
    this.addListeners();
  }

  componentWillUnmount() {
    this.removeListeners();
  }
}

export default Dropdown;
