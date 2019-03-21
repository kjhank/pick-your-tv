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
  constructor(props) {
    super(props);
    this.state = {
      distance: this.props.distance,
      wideangle: this.props.wideangle
    };
  }

  distanceChange = event => {
    this.setState({ distance: event.target.value });
  };

  wideangleChange = event => {
    this.setState({ wideangle: !this.state.wideangle });
  };

  render() {
    // console.log(this.state);
    return (
      <div className={this.props.initialClass + ' seating-section'} id="seating-section">
        <h2>Seating</h2>
        <div className="wrapper">
          <h2>Whate will be your watching distance?</h2>
          <label htmlFor="distance" className="selectlabel">
            Watching distance
            <select
              id="distance"
              value={this.state.distance}
              onChange={this.distanceChange}
            >
              <option value="less than 1m">⩽1m</option>
              <option value="less than 1.5m">1-1.5m</option>
              <option value="less than 2m">1.5-2m</option>
              <option value="less than 2.5m">2-2.5m</option>
              <option value="less than 3m">2.5-3m</option>
              <option value="less than 2.5m">3-3.5m</option>
              <option value="less than 3m">3.5-4m</option>
            </select>
          </label>

          <input
            type="checkbox"
            id="wideangle"
            onChange={this.wideangleChange}
            checked={this.state.wideangle}
          />
          <label htmlFor="wideangle">wide angle seating</label>
        </div>
      </div>
    );
  }
}

export default Seating;
