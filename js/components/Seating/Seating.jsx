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

class Seating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 'less than 3m',
      wideangle: false
    };
  }

  distanceChange = event => {
    this.setState({ distance: event.target.value });
  };

  wideangleChange = event => {
    this.setState({ wideangle: !this.state.wideangle });
  };

  render() {
    const { Consumer } = specsCtx;
    const update = this.updateCtx;

    return (
      <Consumer>
        {({ update, specs }) => (
          <div
            className={this.props.initialClass + ' seating-section'}
            id="seating-section"
          >
            <h2>Seating</h2>
            <div className="wrapper">
              <h2>What will be your watching distance?</h2>
              <label htmlFor="distance" className="selectlabel">
                Watching distance
                <select
                  id="distance"
                  value={this.state.distance}
                  onChange={event => {
                    update(event);
                    this.distanceChange(event);
                  }}
                >
                  <option value="less than 1m">⩽1m</option>
                  <option value="less than 1.5m">1-1.5m</option>
                  <option value="less than 2m">1.5-2m</option>
                  <option value="less than 2.5m">2-2.5m</option>
                  <option value="less than 3m">2.5-3m</option>
                  <option value="less than 3.5m">3-3.5m</option>
                  <option value="less than 4m">3.5-4m</option>
                </select>
              </label>

              <input
                type="checkbox"
                id="wideangle"
                onChange={event => {
                  update(event);
                  this.wideangleChange(event);
                }}
                checked={this.state.wideangle}
              />
              <label htmlFor="wideangle">wide angle seating</label>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Seating;
