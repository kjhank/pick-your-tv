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
  render() {
    return (
      <div>
        <div className="wrapper">
          <label htmlFor="radio-fast">
            <input type="radio" value="fast" name="smart-type" id="radio-fast"/>fast &amp; intuitive
          </label>
          <label htmlFor="radio-slow">
            <input type="radio" value="slow" name="smart-type" id="radio-slow"/>powerful but slower
          </label>
        </div>
        <div className="wrapper">
          <label htmlFor="checkbox-googlecast">
            <input type="checkbox" value="googlecast" id="checkbox-googlecast"/>google cast
          </label>
          <label htmlFor="checkbox-airplay">
            <input type="checkbox" value="airplay" id="checkbox-airplay"/>airplay
          </label>
          <label htmlFor="checkbox-smarthome">
            <input type="checkbox" value="smart home" id="checkbox-smarthome"/>smart home control
          </label>
          <label htmlFor="checkbox-oneremote">
            <input type="checkbox" value="one remote" id="checkbox-oneremote"/>one-remote
          </label>
          <label htmlFor="checkbox-gamemode">
            <input type="checkbox" value="gamemode" id="checkbox-gamemode"/>advanced game mode
          </label>
        </div>
      </div>
    );
  }
}

export default SmartFeatures;
