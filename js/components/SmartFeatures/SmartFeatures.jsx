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

class SmartFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googleCast: false,
      androidTv: false,
      airPlay: false,
      smartHomeControl: false,
      oneRemote: false,
      advancedGameMode: false
    };
  }

  smartTypeChange = event => this.setState({ androidTv: !this.state.androidTv });

  googleCastChange = event => {
    this.setState({ googleCast: !this.state.googleCast });
  };

  airPlayChange = event => {
    this.setState({ airPlay: !this.state.airPlay });
  };

  smartHomeControlChange = event => {
    this.setState({ smartHomeControl: !this.state.smartHomeControl });
  };
  oneRemoteChange = event => {
    this.setState({ oneRemote: !this.state.oneRemote });
  };
  advancedGameModeChange = event => {
    this.setState({ advancedGameMode: !this.state.advancedGameMode });
  };

  render() {
    const { Consumer } = specsCtx;
    const update = this.updateCtx;

    return (
      <Consumer>
        {({ update, specs }) => (
          <div
            className={this.props.initialClass + ' smarttype-section'}
            id="smarttype-section"
          >
            <h2>Smart features</h2>
            <div className="wrapper">
              <h2>Which type of smart TV platform do you prefer?</h2>
              <div>
                <input
                  type="radio"
                  value="fast"
                  name="smart-type"
                  id="radio-fast"
                  checked={!this.state.androidTv}
                  onChange={event => {
                    update(event);
                    this.smartTypeChange(event);
                  }}
                />
                <label htmlFor="radio-fast" className="radiolabel">
                  fast &amp; intuitive
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="slow"
                  name="smart-type"
                  id="radio-slow"
                  checked={this.state.androidTv}
                  onChange={event => {
                    update(event);
                    this.smartTypeChange(event);
                  }}
                />
                <label htmlFor="radio-slow" className="radiolabel">
                  powerful but slower
                </label>
              </div>
            </div>
            <div className="wrapper">
              <h2>Which of the following features do you need?</h2>
              <div>
                <input
                  type="checkbox"
                  value="googlecast"
                  id="checkbox-googlecast"
                  checked={this.state.googleCast}
                  onChange={event => {
                    update(event);
                    this.googleCastChange(event);
                  }}
                />
                <label htmlFor="checkbox-googlecast">google cast</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="airplay"
                  id="checkbox-airplay"
                  checked={this.state.airPlay}
                  onChange={event => {
                    update(event);
                    this.airPlayChange(event);
                  }}
                />
                <label htmlFor="checkbox-airplay">airplay</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  value="smart home"
                  id="checkbox-smarthome"
                  checked={this.state.smartHomeControl}
                  onChange={event => {
                    update(event);
                    this.smartHomeControlChange(event);
                  }}
                />
                <label htmlFor="checkbox-smarthome">smart home control</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  value="one remote"
                  id="checkbox-oneremote"
                  checked={this.state.oneRemote}
                  onChange={event => {
                    update(event);
                    this.oneRemoteChange(event);
                  }}
                />
                <label htmlFor="checkbox-oneremote">one-remote</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="gamemode"
                  id="checkbox-gamemode"
                  checked={this.state.advancedGameMode}
                  onChange={event => {
                    update(event);
                    this.advancedGameModeChange(event);
                  }}
                />
                <label htmlFor="checkbox-gamemode">advanced game mode</label>
              </div>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SmartFeatures;
