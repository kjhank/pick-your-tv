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

class SmartFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smartType: this.props.smartType,
      googleCast: this.props.googleCast,
      airPlay: this.props.airPlay,
      smartHomeControl: this.props.smartHomeControl,
      oneRemote: this.props.oneRemote,
      advancedGameMode: this.props.advancedGameMode
    };
  }

  smartTypeChange = event => this.setState({ smartType: event.target.value });

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
    return (
      <div className={this.props.initialClass + ' smarttype-section'} id="smarttype-section">
        <h2>Smart features</h2>
        <div className="wrapper">
          <h2>Which type of smart TV platform do you prefer?</h2>
          <div>
            <input
              type="radio"
              value="fast"
              name="smart-type"
              id="radio-fast"
              checked={this.state.smartType === 'fast'}
              onChange={this.smartTypeChange}
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
              checked={this.state.smartType === 'slow'}
              onChange={this.smartTypeChange}
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
              onChange={this.googleCastChange}
            />
            <label htmlFor="checkbox-googlecast">google cast</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="airplay"
              id="checkbox-airplay"
              checked={this.state.airPlay}
              onChange={this.airPlayChange}
            />
            <label htmlFor="checkbox-airplay">airplay</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="smart home"
              id="checkbox-smarthome"
              checked={this.state.smartHomeControl}
              onChange={this.smartHomeControlChange}
            />
            <label htmlFor="checkbox-smarthome">smart home control</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="one remote"
              id="checkbox-oneremote"
              checked={this.state.oneRemote}
              onChange={this.oneRemoteChange}
            />
            <label htmlFor="checkbox-oneremote">one-remote</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="gamemode"
              id="checkbox-gamemode"
              checked={this.state.advancedGameMode}
              onChange={this.advancedGameModeChange}
            />
            <label htmlFor="checkbox-gamemode">advanced game mode</label>
          </div>
        </div>
      </div>
    );
  }
}

export default SmartFeatures;
