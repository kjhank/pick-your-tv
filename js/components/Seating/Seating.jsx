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

class Seating extends React.Component {
  render() {
    return (
      <div>
        <h2>Seating:</h2>
        <label htmlFor="wideangle">
          <input type="checkbox" id="wideangle" />
          wide angle seating
        </label>
        <label htmlFor="distance">
          Watching distance
          <select id="distance">
            <option value="less than 1m">⩽1</option>
            <option value="less than 1.5">1-1.5m</option>
            <option value="less than 2m">1.5-2m</option>
            <option value="less than 2.5m">2-2.5m</option>
            <option value="less than 3m">2.5-3m</option>
            <option value="less than 2.5m">3-3.5m</option>
            <option value="less than 3m">3.5-4m</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Seating;
