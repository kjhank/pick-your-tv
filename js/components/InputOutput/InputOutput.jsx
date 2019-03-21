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
import Navigation from '../Navigation/Navigation.jsx';

class InputOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hdmis: '',
      headphoneJack: false,
      hdmi20: false,
      bluetooth: false
    };
  }

  changeHdmis = event => this.setState({ hdmis: event.target.value });
  headphoneJackChange = event =>
    this.setState({ headphoneJack: !this.state.headphoneJack });
  hdmi20Change = event => this.setState({ hdmi20: !this.state.hdmi20 });
  bluetoothChange = event =>
    this.setState({ bluetooth: !this.state.bluetooth });

  render() {
    const { Consumer } = specsCtx;
    const update = this.updateCtx;

    return (
      <Consumer>
        {({ update, specs }) => (
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
                  id="hdmi3-radio"
                  name="hdmis"
                  value="3"
                  checked={this.state.hdmis === '3'}
                  onChange={event => {
                    update(event);
                    this.changeHdmis(event);
                  }}
                />
                <label htmlFor="hdmi3-radio" className="radiolabel">
                  3 HDMIs
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="hdmi4-radio"
                  name="hdmis"
                  value="4"
                  checked={this.state.hdmis === '4'}
                  onChange={event => {
                    update(event);
                    this.changeHdmis(event);
                  }}
                />
                <label htmlFor="hdmi4-radio" className="radiolabel">
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
                  id="checkbox-headphonejack"
                  checked={this.state.headphoneJack}
                  onChange={event => {
                    update(event);
                    this.headphoneJackChange(event);
                  }}
                />
              <label htmlFor="checkbox-headphonejack">Headphone jack</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="all HDMI2.0bs"
                  id="checkbox-hdmi20"
                  checked={this.state.hdmi20}
                  onChange={event => {
                    update(event);
                    this.hdmi20Change(event);
                  }}
                />
                <label htmlFor="checkbox-hdmi20">all HDMIs 2.0b</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="bluetooth audio"
                  id="checkbox-bluetooth"
                  checked={this.state.bluetooth}
                  onChange={event => {
                    update(event);
                    this.bluetoothChange(event);
                  }}
                />
                <label htmlFor="checkbox-bluetooth">Bluetooth audio</label>
              </div>
            </div>
            <Navigation link="summary" />
          </div>
        )}
      </Consumer>
    );
  }
}

export default InputOutput;
