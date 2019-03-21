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
import Navigation from '../Navigation/Navigation.jsx';
import { specsCtx } from '../Context/Context.jsx';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specs: this.props.specs
    };
  }

  render() {
    const { Consumer } = specsCtx;
    const update = this.updateCtx;

    return (
      <Consumer>
        {({ update, specs }) => {
          console.log(specs);
          console.log(Object.values(specs));
          return (
            <div className="summary">
              <h2>Summary</h2>
              <p> Your seating distance is {specs.distance} and you {specs.wideangle ? '' : 'don\'t' } need a wide-angle TV. The main use for your TV is {specs.mainUse} and you usually watch during {specs.usageTime}. You usually watch in a {specs.brightness}-lit room. You prefer a {specs.androidTv ? 'powerful but slower' : 'fast and intuitive'} smart TV platform with {specs.googleCast ? 'Google Cast,' : ''} {specs.airPlay ? 'Apple AirPlay,' : ''} {specs.smartHomeControl ? 'control of your smart home,' : ''}</p>
              <Navigation link="results"/>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Summary;
