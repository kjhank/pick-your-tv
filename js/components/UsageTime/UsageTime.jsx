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

class UsageTime extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="daytime-radio">
          <input
            type="radio"
            value="daytime"
            name="usage-time"
            id="daytime-radio"
          />
          Daytime
        </label>
        <label htmlFor="nighttime-radio">
          <input
            type="radio"
            value="nighttime"
            name="usage-time"
            id="nighttime-radio"
          />
          Night-time
        </label>
        <label htmlFor="radio-247">
          <input type="radio" value="247" name="usage-time" id="radio-247" />
          24/7
        </label>
      </div>
    );
  }
}

export default UsageTime;
