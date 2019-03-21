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

class Brightness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brightness: this.props.brightness
    };
  }

  brightnessChange = event => this.setState({ brightness: event.target.value });

  render() {
    return (
      <div className={this.props.initialClass + ' brightness-section'} id="brightness-section">
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
              onChange={this.brightnessChange}
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
              onChange={this.brightnessChange}
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
              onChange={this.brightnessChange}
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
              onChange={this.brightnessChange}
            />
            <label htmlFor="radio-blinds" className="radiolabel">
              Don't care - using blinds
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Brightness;
