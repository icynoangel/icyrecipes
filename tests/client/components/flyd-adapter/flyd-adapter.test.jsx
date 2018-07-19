import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import FlydAdapter, {
  stream
} from './../../../../src/client/js/components/flyd-adapter/flyd-adapter';
import enzymeToJson from 'enzyme-to-json';

describe('<FlydAdapter />', function() {
  this.getComponent = type => {
    return <FlydAdapter stream={this.properties} component={this.component} />;
  };

  beforeEach(() => {
    this.properties = stream({
      average: 5,
      colors: ['blue', 'yellow']
    });
    this.component = function(props) {
      return (
        <div>
          <div>Average: {props.average}</div>
          <div>
            {props.colors.map((color, index) => {
              return <div key={index}>Color: {color}</div>;
            })}
          </div>
        </div>
      );
    };
  });

  it('Should render wrapped component', () => {
    const wrapper = mount(this.getComponent());
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render wrapped component and update its props', () => {
    const wrapper = mount(this.getComponent());
    this.properties({
      average: 10,
      colors: ['red', 'green']
    });
    wrapper.update();
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });
});
