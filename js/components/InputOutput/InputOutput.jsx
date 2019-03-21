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

import Navigation from '../Navigation/Navigation.jsx';

class InputOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hdmis: this.props.hdmis,
      headphoneJack: this.props.headphoneJack,
      hdmi20: this.props.hdmi20,
      bluetooth: this.props.bluetooth
    };
  }

  changeHdmis = event => this.setState({ hdmis: event.target.value });
  headphoneJackChange = event =>
    this.setState({ headphoneJack: !this.state.headphoneJack });
  hdmi20Change = event => this.setState({ hdmi20: !this.state.hdmi20 });
  bluetoothChange = event =>
    this.setState({ bluetooth: !this.state.bluetooth });

  render() {
    return (
      <div
        className={this.props.initialClass + ' inputoutput-section'}
        id="inputoutput-section"
      >
        <h2>I/O</h2>
        <div className="wrapper">
          <h2>How many HDMI inputs do you need?</h2>
          <div>
            <input
              type="radio"
              id="hdmi3"
              name="hdmis"
              value="hdmi3"
              checked={this.state.hdmis === 'hdmi3'}
              onChange={this.changeHdmis}
            />
            <label htmlFor="hdmi3" className="radiolabel">
              3 HDMIs
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="hdmi4"
              name="hdmis"
              value="hdmi4"
              checked={this.state.hdmis === 'hdmi4'}
              onChange={this.changeHdmis}
            />
            <label htmlFor="hdmi4" className="radiolabel">
              4 HDMIs
            </label>
          </div>
        </div>
        <div className="wrapper">
          <h2>Do you need any of the following features?</h2>
          <div>
            <input
              type="checkbox"
              value="headphone jack"
              id="checkbox-headphone"
              checked={this.state.headphoneJack}
              onChange={this.headphoneJackChange}
            />
            <label htmlFor="checkbox-headphone">Headphone jack</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="all HDMI2.0bs"
              id="checkbox-hdmi20"
              checked={this.state.hdmi20}
              onChange={this.hdmi20Change}
            />
            <label htmlFor="checkbox-hdmi20">all HDMIs 2.0b</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="bluetooth audio"
              id="checkbox-bluetooth"
              checked={this.state.bluetooth}
              onChange={this.bluetoothChange}
            />
            <label htmlFor="checkbox-bluetooth">Bluetooth audio</label>
          </div>
        </div>
        <Navigation link="results"/>
      </div>
    );
  }
}

export default InputOutput;
