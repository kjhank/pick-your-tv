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

class MainUse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainUse: ''
    };
  }

  mainUseChange = event => {
    this.setState({ mainUse: event.target.value });
  };

  render() {
    const { Consumer } = specsCtx;
    const update = this.updateCtx;
    return (
      <Consumer>
        {({ update, specs }) => (
          <div
            className={this.props.initialClass + ' mainuse-section'}
            id="mainuse-section"
          >
            <h2>Main use</h2>
            <div className="wrapper">
              <h2>What will be the main use of your TV?</h2>
              <div>
                <input
                  type="radio"
                  value="Movies"
                  name="main-use"
                  id="movies-radio"
                  checked={this.state.mainUse === 'Movies'}
                  onChange={event => {
                    update(event);
                    this.mainUseChange(event);
                  }}
                />
                <label htmlFor="movies-radio" className="radiolabel">
                  Movies
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="Gaming"
                  name="main-use"
                  id="gaming-radio"
                  checked={this.state.mainUse === 'Gaming'}
                  onChange={event => {
                    update(event);
                    this.mainUseChange(event);
                  }}
                />
                <label htmlFor="gaming-radio" className="radiolabel">
                  Gaming
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="Sports"
                  name="main-use"
                  id="sports-radio"
                  checked={this.state.mainUse === 'Sports'}
                  onChange={event => {
                    update(event);
                    this.mainUseChange(event);
                  }}
                />
                <label htmlFor="sports-radio" className="radiolabel">
                  Sports
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="Generic"
                  name="main-use"
                  id="generic-radio"
                  checked={this.state.mainUse === 'Generic'}
                  onChange={event => {
                    update(event);
                    this.mainUseChange(event);
                  }}
                />
                <label htmlFor="generic-radio" className="radiolabel">
                  Generic
                </label>
              </div>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default MainUse;
