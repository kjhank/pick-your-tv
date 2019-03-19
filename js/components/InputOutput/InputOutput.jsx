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

class InputOutput extends React.Component {
  render() {
    return (
      <div>
        <h2>I/O</h2>
        <div className="wrapper">
          <label htmlFor="hdmi3">
            <input type="radio" id="hdmi3" />3 HDMIs
          </label>
          <label htmlFor="hdmi4">
            <input type="radio" id="hdmi4" />4 HDMIs
          </label>
        </div>
        <label htmlFor="checkbox-headphone">
          <input
            type="checkbox"
            value="headphone jack"
            id="checkbox-headphone"
          />
          Headphone jack
        </label>
        <label htmlFor="checkbox-hdmi20">
          <input type="checkbox" value="all HDMI2.0bs" id="checkbox-hdmi20" />
          all HDMIs 2.0b
        </label>
        <label htmlFor="checkbox-bluetooth">
          <input
            type="checkbox"
            value="bluetooth audio"
            id="checkbox-bluetooth"
          />
          Bluetooth audio
        </label>
      </div>
    );
  }
}

export default InputOutput;
