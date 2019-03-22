import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';

import { specsCtx } from '../Context/Context.jsx';

class Brightness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brightness: ''
    };
  }

  brightnessChange = event => this.setState({ brightness: event.target.value });

  render() {
    const { Consumer } = specsCtx;
    const update = this.updateCtx;

    return (
      <Consumer>
        {({ update, specs }) => (
          <div
            className={this.props.initialClass + ' brightness-section'}
            id="brightness-section"
          >
            <h2>Room brightness</h2>
            <div className="wrapper">
              <h2>How bright is your room?</h2>
              <div>
                <input
                  type="radio"
                  value="bright"
                  name="room-brightness"
                  id="radio-bright"
                  checked={this.state.brightness === 'bright'}
                  onChange={event => {
                    update(event);
                    this.brightnessChange(event);
                  }}
                />
                <label htmlFor="radio-bright" className="radiolabel">
                  Lots of light &amp; sunshine
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="moderate"
                  name="room-brightness"
                  id="radio-moderate"
                  checked={this.state.brightness === 'moderate'}
                  onChange={event => {
                    update(event);
                    this.brightnessChange(event);
                  }}
                />
                <label htmlFor="radio-moderate" className="radiolabel">
                  Moderate light
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="black"
                  name="room-brightness"
                  id="radio-black"
                  checked={this.state.brightness === 'black'}
                  onChange={event => {
                    update(event);
                    this.brightnessChange(event);
                  }}
                />
                <label htmlFor="radio-black" className="radiolabel">
                  Pitch-black
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="blinds"
                  name="room-brightness"
                  id="radio-blinds"
                  checked={this.state.brightness === 'blinds'}
                  onChange={event => {
                    update(event);
                    this.brightnessChange(event);
                  }}
                />
                <label htmlFor="radio-blinds" className="radiolabel">
                  Don't care - using blinds
                </label>
              </div>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Brightness;
