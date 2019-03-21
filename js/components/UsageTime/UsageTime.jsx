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
import { specsCtx } from '../Context/Context.jsx'; //TODO

class UsageTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usageTime: 'Daytime'
    };
  }

  usageTimeChange = event => this.setState({ usageTime: event.target.value });

  render() {
    const { Consumer } = specsCtx;
    const update = this.updateCtx;
    return (
      <Consumer>
        {(
          { update, specs } //TODO
        ) => (
          <div
            className={this.props.initialClass + ' usagetime-section'}
            id="usagetime-section"
          >
            <h2>Usage time</h2>
            <div className="wrapper">
              <h2>At which time of the day will you be using your TV?</h2>
              <div>
                <input
                  type="radio"
                  value="Daytime"
                  name="usage-time"
                  id="daytime-radio"
                  checked={this.state.usageTime === 'Daytime'}
                  onChange={event => {update(event); this.usageTimeChange(event)}}
                />
                <label htmlFor="daytime-radio" className="radiolabel">
                  Daytime
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="Night-time"
                  name="usage-time"
                  id="nighttime-radio"
                  checked={this.state.usageTime === 'Night-time'}
                  onChange={event => {update(event); this.usageTimeChange(event)}}
                />
                <label htmlFor="nighttime-radio" className="radiolabel">
                  Night-time
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="24/7"
                  name="usage-time"
                  id="radio-247"
                  checked={this.state.usageTime === '24/7'}
                  onChange={event => {update(event); this.usageTimeChange(event)}}
                />
                <label htmlFor="radio-247" className="radiolabel">
                  24/7
                </label>
              </div>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default UsageTime;
